<?php

namespace App\Services\Model;

ini_set('memory_limit', '1024M');

class ModelRestoreService
{
    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var GroupService
     */
    public $groupService;

    /**
     * @var ProjectService
     */
    public $projectService;

    /**
     * @var ExpeditionService
     */
    public $expeditionService;

    /**
     * ModelDeleteService constructor.
     * @param UserService $userService
     * @param GroupService $groupService
     * @param ProjectService $projectService
     * @param ExpeditionService $expeditionService
     */
    public function __construct(
        UserService $userService,
        GroupService $groupService,
        ProjectService $projectService,
        ExpeditionService $expeditionService
    )
    {
        $this->userService = $userService;
        $this->groupService = $groupService;
        $this->projectService = $projectService;
        $this->expeditionService = $expeditionService;
    }

    /**
     * Restore user.
     *
     * @param $id
     * @return mixed
     */
    public function restoreUser($id)
    {
        return $this->userService->repository->restore($id);
    }

    /**
     * Restore group.
     *
     * @param $id
     * @return mixed
     */
    public function restoreGroup($id)
    {
        return $this->groupService->repository->restore($id);
    }

    /**
     * Restore Project.
     *
     * @param $id
     * @return mixed
     */
    public function restoreProject($id)
    {
        return $this->projectService->repository->restore($id);
    }

    /**
     * Restore Expedition.
     *
     * @param $id
     */
    public function restoreExpedition($id)
    {
        return $this->expeditionService->repository->restore($id);
    }
}