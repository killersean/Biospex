<?php

namespace App\Http\Controllers\Frontend;

use App\Services\Model\GroupService;
use App\Services\Model\ModelDeleteService;
use App\Services\Model\ModelDestroyService;
use App\Services\Model\ModelRestoreService;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\GroupFormRequest;
use App\Repositories\Contracts\User;

class GroupsController extends Controller
{

    /**
     * @var
     */
    public $groupService;

    /**
     * @var User
     */
    public $user;

    /**
     * GroupsController constructor.
     *
     * @param GroupService $groupService
     * @param User $user
     */
    public function __construct(GroupService $groupService, User $user)
    {
        $this->groupService = $groupService;
        $this->user = $user;
    }

    /**
     * Display groups.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $user = $this->user->with(['groups'])->find(Request::user()->id);
        $trashed = $this->user->with(['trashedGroups'])->find(Request::user()->id);

        return view('frontend.groups.index', compact('user', 'trashed'));
    }

    /**
     * Show create group form.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $user = Request::user();

        return view('frontend.groups.create', compact('user'));
    }

    /**
     * Store a newly created group.
     *
     * @param GroupFormRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(GroupFormRequest $request)
    {
        $user = Request::user();

        $group = $this->groupService->repository->create(['user_id' => $user->id, 'name' => $request->get('name')]);

        if ($group) {
            $user->assignGroup($group);

            Event::fire('group.saved');

            session_flash_push('success', trans('groups.created'));

            return redirect()->route('web.groups.index');
        }

        session_flash_push('warning', trans('groups.loginreq'));

        return redirect()->route('web.groups.create');
    }

    /**
     * Show group page.
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $user = Request::user();
        $with = [
            'projects',
            'owner.profile',
            'users.profile'
        ];
        $group = $this->groupService->repository->with($with)->find($id);

        if ($user->cannot('show', $group))
        {
            session_flash_push('warning', trans('pages.insufficient_permissions'));

            return redirect()->route('web.groups.index');
        }

        return view('frontend.groups.show', compact('group'));

    }

    /**
     * Show group edit form.
     *
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
     */
    public function edit($id)
    {
        $user = Request::user();
        $group = $this->groupService->repository->with(['owner'])->find($id);
        $users = $this->groupService->getGroupUsersSelect($group->id);

        if ($user->cannot('update', $group))
        {
            session_flash_push('warning', trans('pages.insufficient_permissions'));

            return redirect()->route('web.groups.index');
        }

        return view('frontend.groups.edit', compact('group', 'users'));
    }

    /**
     * Update group.
     *
     * @param GroupFormRequest $request
     * @param $groupId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(GroupFormRequest $request, $groupId)
    {
        $user = Request::user();

        $group = $this->groupService->repository->find($groupId);

        if ($user->cannot('update', $group))
        {
            session_flash_push('warning', trans('pages.insufficient_permissions'));

            return redirect()->route('web.groups.index');
        }

        $this->groupService->repository->update($request->all(), $group->id);

        Event::fire('group.saved');

        session_flash_push('success', trans('groups.updated'));

        return redirect()->route('web.groups.index');
    }

    /**
     * Soft delete the specified resource from storage.
     *
     * @param ModelDeleteService $service
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete(ModelDeleteService $service, $id)
    {
        $group = $service->groupService->repository->find($id);

        if (Request::user()->cannot('delete', $group))
        {
            session_flash_push('warning', trans('pages.insufficient_permissions'));

            return redirect()->route('web.groups.index');
        }

        $service->deleteGroup($group->id) ?
            session_flash_push('success', trans('groups.group_deleted')) :
            session_flash_push('error', trans('groups.group_deleted_failed'));

        return redirect()->route('web.groups.index');
    }

    /**
     * Destroy the specified resource from storage.
     *
     * @param ModelDestroyService $service
     * @param $groupId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ModelDestroyService $service, $groupId)
    {
        $group = $this->groupService->repository->withTrashed($groupId);

        if ( ! $this->checkPermissions(Request::user(), [$group], 'delete'))
        {
            return redirect()->route('web.groups.index');
        }

        $service->destroyGroup($group->id) ?
            session_flash_push('success', trans('groups.group_destroyed')) :
            session_flash_push('error', trans('groups.group_destroyed_failed'));

        return redirect()->route('web.groups.index');

    }

    /**
     * Restore group.
     *
     * @param ModelRestoreService $service
     * @param $groupId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(ModelRestoreService $service, $groupId)
    {
        $service->restoreGroup($groupId) ?
            session_flash_push('success', trans('projects.group_restored')) :
            session_flash_push('error', trans('projects.group_restored_failed'));

        return redirect()->route('web.groups.index');
    }
}
