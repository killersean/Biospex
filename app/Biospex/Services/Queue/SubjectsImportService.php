<?php namespace Biospex\Services\Queue;

/**
 * SubjectsImportService.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <bruhnrp@gmail.com>
 * @license    GNU General Public License, version 3
 * @copyright  (c) 2014, Biospex
 * @link       http://biospex.org
 *
 * This file is part of Biospex.
 * Biospex is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Biospex is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Biospex.  If not, see <http://www.gnu.org/licenses/>.
 */

use Illuminate\Filesystem\Filesystem;
use Biospex\Repo\Import\ImportInterface;
use Biospex\Repo\Project\ProjectInterface;
use Biospex\Repo\User\UserInterface;
use Biospex\Services\Report\SubjectImportReport;
use Biospex\Services\Subject\SubjectProcess;
use Biospex\Services\Xml\XmlProcess;
use Biospex\Mailer\BiospexMailer;
use Illuminate\Support\Facades\Config;

class SubjectsImportService {

    /**
     * Scratch directory.
     */
    protected $scratchDir;

    /**
     * Directory where darwin core files are stored during processing.
     *
     * @var string
     */
    protected $subjectsImportDir;

    /**
     * Tmp directory for extracted files
     * @var string
     */
    protected $scratchFileDir;

    /**
     * Queue job.
     * @var
     */
    protected $job;

    /**
     * Constructor
     *
     * @param ImportInterface $import
     * @param Filesystem $filesystem
     * @param SubjectProcess $subjectProcess
     * @param XmlProcess $xmlProcess
     * @param UserInterface $user
     * @param ProjectInterface $project
     * @param BiospexMailer $mailer
     * @param SubjectImportReport $report
     */
    public function __construct(
        Filesystem $filesystem,
        ImportInterface $import,
        ProjectInterface $project,
        UserInterface $user,
        SubjectImportReport $report,
        SubjectProcess $subjectProcess,
        XmlProcess $xmlProcess,
        BiospexMailer $mailer
    )
    {
        $this->filesystem = $filesystem;
        $this->import = $import;
        $this->project = $project;
        $this->user = $user;
        $this->report = $report;
        $this->subjectProcess = $subjectProcess;
        $this->xmlProcess = $xmlProcess;
        $this->mailer = $mailer;

        $this->scratchDir = Config::get('config.scratchDir');
        $this->subjectsImportDir = Config::get('config.subjectsImportDir');
    }

    /**
     * Fire method
     * @param $job
     * @param $data
     */
    public function fire($job, $data)
    {
        $this->job = $job;
        $import = $this->import->find($data['id']);
        $user = $this->user->find($import->user_id);
        $project = $this->project->find($import->project_id);

        $fileName = pathinfo($this->subjectsImportDir . '/' . $import->file, PATHINFO_FILENAME );
        $this->scratchFileDir = $this->scratchDir . '/' . $import->id . '-' . md5($fileName);
        $zipFile = $this->subjectsImportDir . '/' . $import->file;

        try
        {
            $this->makeTmp();
            $this->unzip($zipFile);

            $this->subjectProcess->processSubjects($import->project_id, $this->scratchFileDir);

            $duplicates = $this->subjectProcess->getDuplicates();
            $rejects = $this->subjectProcess->getRejectedMedia();

            $this->report->complete($user->email, $project->title, $duplicates, $rejects);

            $this->filesystem->deleteDirectory($this->scratchFileDir);
            $this->filesystem->delete($zipFile);

            $this->import->destroy($import->id);
        }
        catch (Exception $e)
        {
            $import->error = 1;
            $this->import->save($import);
            $this->report->addError(trans('emails.error_import_process',
                ['id' => $import->id, 'message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]
            ));
            $this->report->error($import->id, $user->email, $project->title);
        }

        $this->delete();

        return;
    }

    /**
     * Create tmp data directory
     *
     * @throws \Exception
     */
    protected function makeTmp()
    {
        if ( ! $this->filesystem->isDirectory($this->scratchFileDir))
        {
            if ( ! $this->filesystem->makeDirectory($this->scratchFileDir, 0777, true))
                throw new \Exception(trans('emails.error_create_dir', ['directory' => $this->scratchFileDir]));
        }

        if ( ! $this->filesystem->isWritable($this->scratchFileDir))
        {
            if ( ! chmod($this->scratchFileDir, 0777))
                throw new \Exception(trans('emails.error_write_dir', ['directory' => $this->scratchFileDir]));
        }

        return;
    }

    /**
     * Extract files from zip
     * ZipArchive causes MAC uploaded files to extract with two folders.
     *
     * @param $zipFile
     * @throws Exception
     */
    public function unzip($zipFile)
    {
        shell_exec("unzip $zipFile -d $this->scratchFileDir");

        return;
    }

    /**
     * Delete a job from the queue
     */
    public function delete()
    {
        $this->job->delete();
    }

    /**
     * Release a job ack to the queue
     */
    public function release()
    {
        $this->job->release();
    }

    /**
     * Return number of attempts on the job
     *
     * @return mixed
     */
    public function getAttempts()
    {
        return $this->job->attempts();
    }

    /**
     * Get id of job
     *
     * @return mixed
     */
    public function getJobId()
    {
        return $this->job->getJobId();
    }
}