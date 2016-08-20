<?php

namespace App\Services\Actor\NfnPanoptes;

ini_set('memory_limit', '1024M');

use App\Services\Actor\ActorInterface;
use App\Services\Actor\ActorService;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Exception;
use RuntimeException;

class NfnPanoptesExport implements ActorInterface
{
    /**
     * @var ActorService
     */
    private $service;

    /**
     * @var \App\Services\Actor\ActorFileService
     */
    private $fileService;

    /**
     * @var \App\Services\Actor\ActorImageService
     */
    private $imageService;

    /**
     * @var \App\Services\Actor\ActorRepositoryService
     */
    private $repoService;

    /**
     * @var
     */
    private $record;

    /**
     * Missing image when retrieving via curl.
     *
     * @var array
     */
    public $missingImg = [];

    /**
     * @var array
     */
    public $csvExport = [];

    /**
     * @var mixed
     */
    public $nfnExportDir;

    /**
     * @var mixed
     */
    public $nfnCsvMap;

    /**
     * @var mixed
     */
    public $largeWidth;

    /**
     * NfnPanoptesExport constructor.
     * @param ActorService $service
     * @internal param ActorRepositoryService $repositoryService
     * @internal param ActorImageService $imageService
     */
    public function __construct(
        ActorService $service
    )
    {
        $this->service = $service;
        $this->fileService = $service->fileService;
        $this->imageService = $service->imageService;
        $this->repoService = $service->repositoryService;

        $this->nfnExportDir = $this->service->config->get('config.nfn_export_dir');
        $this->nfnCsvMap = $this->service->config->get('config.nfnCsvMap');
        $this->largeWidth = $this->service->config->get('config.nfnImageSize.largeWidth');
    }

    /**
     * Process current state
     *
     * @param $actor
     * @return mixed|void
     * @throws \Exception
     */
    public function process($actor)
    {
        try {
            $this->fileService->makeDirectory($this->nfnExportDir);

            $this->record = $this->repoService->expedition
                ->skipCache()
                ->with(['project.group', 'subjects'])
                ->find($actor->pivot->expedition_id);

            $this->fileService->setDirectories($actor->id . '-' . md5($this->record->title));

            $this->imageService->setWorkingDirVars(
                $this->fileService->workingDir,
                $this->fileService->workingDirOrig,
                $this->fileService->workingDirConvert
            );

            $this->imageService->buildImageUris($actor, $this->record->subjects);

            $this->imageService->getImages();

            $files = $this->fileService->getFiles($this->fileService->workingDirOrig);

            $this->imageService->convert($files, [['width' => $this->largeWidth]]);

            $this->fileService->filesystem->moveDirectory(
                $this->fileService->workingDirConvert,
                $this->fileService->workingDir . '/' . $this->record->uuid
            );

            $this->fileService->filesystem->deleteDirectory($this->fileService->workingDirOrig);

            $this->buildCsvArray($this->record->subjects);

            $this->createCsv($this->record->uuid);

            $tarGzFiles = $this->fileService->compressDirectories([$this->imageService->workingDir . '/' . $this->record->uuid]);

            $this->repoService->createDownloads($this->record->id, $actor->id, $tarGzFiles);

            $this->fileService->moveCompressedFiles($this->fileService->workingDir, $this->nfnExportDir);

            $this->fileService->filesystem->deleteDirectory($this->fileService->workingDir);

            $this->sendReport();

            $actor->pivot->queued = 0;
            ++$actor->pivot->state;
            $actor->pivot->save();
        }
        catch(FileNotFoundException $e) {}
        catch(RuntimeException $e) {}
        catch(Exception $e)
        {
            $actor->pivot->queued = 0;
            $actor->pivot->error = 1;
            $actor->pivot->save();

            $this->service->report->addError($e->getMessage());
            $this->service->report->reportSimpleError();
        }

    }

    /**
     * Build csvExport array for export.
     *
     * @param array $subjects
     */
    public function buildCsvArray($subjects)
    {
        foreach ($subjects as $subject)
        {
            $this->csvExport[] = $this->mapNfnCsvColumns($subject);
        }
    }

    /**
     * Map nfn csvExport values from configuration
     * @param $subject
     * @return array
     */
    public function mapNfnCsvColumns($subject)
    {
        $csvArray = [];
        foreach ($this->nfnCsvMap as $key => $item)
        {
            if ($key === '#expeditionId')
            {
                $csvArray[$key] = $this->record->id;
                continue;
            }
            if ($key === '#expeditionTitle')
            {
                $csvArray[$key] = $this->record->title;
                continue;
            }
            if ($key === 'imageName')
            {
                $csvArray[$key] = $subject->_id . '.jpg';
                continue;
            }
            if ( ! is_array($item))
            {
                $csvArray[$key] = $item === '' ? '' : $subject->{$item};
                continue;
            }

            $csvArray[$key] = '';
            foreach ($item as $doc => $value)
            {
                if (isset($subject->{$doc}->{$value}))
                {
                    $csvArray[$key] = $subject->{$doc}->{$value};
                    break;
                }
            }
        }

        return $csvArray;
    }

    /**
     * Create csv file.
     *
     * @param $folder
     */
    public function createCsv($folder)
    {
        $this->service->report->csv->writerCreateFromPath($this->fileService->workingDir . '/' . $folder . '/' . $this->record->uuid . '.csv');
        $this->service->report->csv->insertOne(array_keys($this->csvExport[0]));
        $this->service->report->csv->insertAll($this->csvExport);
    }

    /**
     * Send report for process completed.
     */
    protected function sendReport()
    {
        $vars = [
            'title' => $this->record->title,
            'message' => trans('emails.expedition_export_complete_message', ['expedition', $this->record->title]),
            'groupId' => $this->record->project->group->id,
            'attachmentName' => trans('emails.missing_images_attachment_name', ['recordId' => $this->record->id])
        ];

        $this->service->processComplete($vars, $this->imageService->getMissingImages());
    }
}
