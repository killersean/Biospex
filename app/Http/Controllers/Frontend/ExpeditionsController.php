<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExpeditionFormRequest;
use App\Services\Model\ExpeditionService;
use App\Services\Model\ModelDeleteService;
use App\Services\Model\ModelDestroyService;
use App\Services\Model\ModelRestoreService;
use App\Services\Model\ProjectService;
use App\Services\Model\UserService;
use App\Services\Model\WorkflowManagerService;
use JavaScript;


class ExpeditionsController extends Controller
{
    /**
     * @var ExpeditionService
     */
    private $expeditionService;
    /**
     * @var ProjectService
     */
    private $projectService;
    /**
     * @var WorkflowManagerService
     */
    private $workflowManagerService;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * ExpeditionsController constructor.
     *
     * @param ExpeditionService $expeditionService
     * @param ProjectService $projectService
     * @param WorkflowManagerService $workflowManagerService
     * @param UserService $userService
     */
    public function __construct(
        ExpeditionService $expeditionService,
        ProjectService $projectService,
        WorkflowManagerService $workflowManagerService,
        UserService $userService
    )
    {
        $this->expeditionService = $expeditionService;
        $this->projectService = $projectService;
        $this->workflowManagerService = $workflowManagerService;
        $this->userService = $userService;
    }

    /**
     * Display all expeditions for user.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $user = $this->userService->getLoggedInUser();

        $expeditions = $this->expeditionService->getExpeditionsByUserId($user->id);

        return view('frontend.expeditions.index', compact('expeditions', 'user'));
    }

    /**
     * Display a listing of the resource.
     *
     * @param $projectId
     * @return \Illuminate\View\View
     */
    public function ajax($projectId)
    {
        if ( ! request('ajax'))
        {
            return redirect()->route('web.projects.show', [$projectId]);
        }

        $user = $this->userService->getLoggedInUser();

        $project = $this->projectService->expeditionAjax($projectId);

        return view('frontend.expeditions.ajax', compact('project', 'user'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param $projectId
     * @return \Illuminate\View\View
     */
    public function create($projectId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('create', [$project, $project->group]))
        {
            return redirect()->route('web.projects.index');
        }

        JavaScript::put([
            'projectId'    => $project->id,
            'expeditionId' => 0,
            'subjectIds'   => [],
            'maxSubjects'  => config('config.expedition_size'),
            'url'          => route('web.grids.create', [$project->id]),
            'exportUrl'    => '',
            'showCheckbox' => true,
            'explore'      => false
        ]);

        return view('frontend.expeditions.create', compact('project'));
    }

    /**
     * Store new expedition.
     *
     * @param ExpeditionFormRequest $request
     * @param $projectId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ExpeditionFormRequest $request, $projectId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('create', [$project, $project->group]))
        {
            return redirect()->route('web.projects.index');
        }

        $expedition = $this->expeditionService->createExpedition($request->all());

        if ($expedition)
        {
            session_flash_push('success', trans('expeditions.expedition_created'));

            return redirect()->route('web.expeditions.show', [$projectId, $expedition->id]);
        }

        session_flash_push('error', trans('expeditions.expedition_save_error'));
        return redirect()->route('web.projects.show', [$projectId]);
    }

    /**
     * Display the specified resource
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($projectId, $expeditionId)
    {
        $expedition = $this->expeditionService->getShowExpedition($expeditionId);

        $btnDisable = ($expedition->project->ocrQueue->isEmpty() || $expedition->stat->subject_count === 0);

        JavaScript::put([
            'projectId'    => $expedition->project->id,
            'expeditionId' => $expedition->id,
            'subjectIds'   => [],
            'maxSubjects'  => config('config.expedition_size'),
            'url'          => route('web.grids.show', [$expedition->project->id, $expedition->id]),
            'exportUrl'    => route('web.grids.expedition.export', [$expedition->project->id, $expedition->id]),
            'showCheckbox' => false,
            'explore'      => false
        ]);

        return view('frontend.expeditions.show', compact('expedition', 'btnDisable'));
    }

    /**
     * Clone an existing expedition
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
     */
    public function duplicate($projectId, $expeditionId)
    {
        $expedition = $this->expeditionService->getDuplicateCreateExpedition($expeditionId);

        if ( ! $this->checkPermissions('create', [$expedition->project, $expedition->project->group]))
        {
            return redirect()->route('web.projects.index');
        }

        JavaScript::put([
            'projectId'    => $expedition->project->id,
            'expeditionId' => 0,
            'subjectIds'   => [],
            'maxSubjects'  => config('config.expedition_size'),
            'url'          => route('web.grids.create', [$expedition->project->id]),
            'exportUrl'    => route('web.grids.expedition.export', [$expedition->project->id, $expedition->id]),
            'showCheckbox' => true,
            'explore'      => false
        ]);

        return view('frontend.expeditions.clone', compact('expedition'));
    }

    /**
     * Show the form for editing the specified resource
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
     */
    public function edit($projectId, $expeditionId)
    {
        $expedition = $this->expeditionService->getEditExpedition($expeditionId);

        if ( ! $this->checkPermissions('update', $expedition->project))
        {
            return redirect()->route('web.projects.index');
        }

        $subjectIds = [];
        foreach ($expedition->subjects as $subject)
        {
            $subjectIds[] = $subject->_id;
        }

        JavaScript::put([
            'projectId'    => $expedition->project->id,
            'expeditionId' => $expedition->id,
            'subjectIds'   => $subjectIds,
            'maxSubjects'  => config('config.expedition_size'),
            'url'          => route('web.grids.edit', [$expedition->project->id, $expedition->id]),
            'exportUrl'    => route('web.grids.expedition.export', [$expedition->project->id, $expedition->id]),
            'showCheckbox' => $expedition->workflowManager === null,
            'explore'      => false
        ]);

        return view('frontend.expeditions.edit', compact('expedition'));
    }

    /**
     * Update expedition.
     *
     * @param ExpeditionFormRequest $request
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ExpeditionFormRequest $request, $projectId, $expeditionId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('update', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $result = $this->expeditionService->updateExpedition($expeditionId, $request->all());

        if ( ! $result)
        {
            session_flash_push('error', trans('expeditions.expedition_save_error'));

            return redirect()->route('projects.expeditions.edit', [$projectId, $expeditionId]);
        }

        // Success!
        session_flash_push('success', trans('expeditions.expedition_updated'));

        return redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);
    }

    /**
     * Start processing expedition actors
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function process($projectId, $expeditionId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('update', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $this->expeditionService->processExpedition($expeditionId);

        return redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);
    }

    /**
     * Reprocess OCR.
     *
     * @param $projectId
     * @param $expeditionId
     * @return mixed
     */
    public function ocr($projectId, $expeditionId)
    {

        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('update', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $this->projectService->processOcr($project, $expeditionId);

        return redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);
    }

    /**
     * Stop a expedition process.
     *
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function stop($projectId, $expeditionId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('update', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $this->workflowManagerService->toggleExpeditionWorkflow($expeditionId);

        return redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);
    }

    /**
     * Soft delete the specified resource from storage.
     *
     * @param ModelDeleteService $service
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete(ModelDeleteService $service, $projectId, $expeditionId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('delete', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $result = $service->deleteExpedition($expeditionId);

        $result ?
            session_flash_push('success', trans('expeditions.expedition_deleted')) :
            session_flash_push('error', trans('expeditions.expedition_delete_error'));

        return $result ?
            redirect()->route('web.projects.show', [$projectId]) :
            redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);

    }

    /**
     * Soft delete the specified resource from storage.
     *
     * @param ModelDestroyService $service
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ModelDestroyService $service, $projectId, $expeditionId)
    {
        $project = $this->projectService->permissionCheck($projectId);

        if ( ! $this->checkPermissions('delete', $project))
        {
            return redirect()->route('web.projects.index');
        }

        $result = $service->destroyExpedition($expeditionId);

        $result ? session_flash_push('success', trans('expeditions.expedition_destroyed')) :
            session_flash_push('error', trans('expeditions.expedition_destroy_error'));

        return $result ?
            redirect()->route('web.projects.show', [$projectId]) :
            redirect()->route('web.expeditions.show', [$projectId, $expeditionId]);

    }

    /**
     * Restore deleted expedition.
     *
     * @param ModelRestoreService $service
     * @param $projectId
     * @param $expeditionId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(ModelRestoreService $service, $projectId, $expeditionId)
    {
        $service->restoreExpedition($expeditionId) ?
            session_flash_push('success', trans('expeditions.expedition_restore')) :
            session_flash_push('error', trans('expeditions.expedition_restore_error'));

        return redirect()->route('web.projects.show', [$projectId]);
    }
}
