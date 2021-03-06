<?php

namespace App\Services\Model;

use App\Facades\Flash;
use App\Repositories\Interfaces\Group;

class GroupService
{

    /**
     * @var Group
     */
    public $groupContract;

    /**
     * GroupService constructor.
     * @param Group $groupContract
     */
    public function __construct(Group $groupContract)
    {
        $this->groupContract = $groupContract;
    }

    /**
     * @return mixed
     */
    public function getAllGroups()
    {
        return $this->groupContract->all();
    }

    /**
     * @return mixed
     */
    public function getAllTrashedGroups()
    {
        return $this->groupContract->getOnlyTrashed();
    }

    /**
     * Find a group by id with relationships if required.
     *
     * @param $groupId
     * @return mixed
     */
    public function findGroup($groupId)
    {
        return $this->groupContract->find($groupId);
    }

    /**
     * Find a group by id with relationships.
     *
     * @param $groupId
     * @param array $with
     * @return mixed
     */
    public function findGroupWith($groupId, array $with = [])
    {
        return $this->groupContract->findWith($groupId, $with);
    }

    /**
     * Returned only trashed group by id.
     *
     * @param $groupId
     * @return mixed
     */
    public function findTrashed($groupId)
    {
        return $this->groupContract->findOnlyTrashed($groupId, ['trashedProjects']);
    }

    /**
     * Get user project list by group for logged in user.
     *
     * @param $user
     * @param bool $trashed
     * @return mixed
     */
    public function getUserProjectListByGroup($user, $trashed = false)
    {
        return $this->groupContract->getUserProjectListByGroup($user, $trashed);
    }

    /**
     * Get array of users as select.
     *
     * @param $groupId
     * @return array
     */
    public function getGroupUsersSelect($groupId)
    {
        $group = $this->groupContract->findWith($groupId, ['users.profile']);
        $select = [];
        foreach ($group->users as $user)
        {
            $select[$user->id] = $user->profile->fullName;
        }

        return $select;
    }

    /**
     * Create a group.
     *
     * @param $user
     * @param $title
     * @return bool
     */
    public function createGroup($user, $title)
    {
        $group = $this->groupContract->create(['user_id' => $user->id, 'title' => $title]);

        if ($group)
        {
            $user->assignGroup($group);

            event('group.saved');

            Flash::success(trans('groups.created'));

            return true;
        }

        Flash::warning(trans('groups.loginreq'));

        return false;
    }

    /**
     * Update Group.
     *
     * @param array $attributes
     * @param $groupId
     */
    public function updateGroup(array $attributes = [], $groupId)
    {
        $this->groupContract->update($attributes, $groupId) ?
            Flash::success(trans('groups.updated')) :
            Flash::error('groups.updateproblem');

        return;
    }

    /**
     * Delete Group.
     *
     * @param $group
     * @return bool
     */
    public function deleteGroup($group)
    {
        try
        {
            foreach ($group->projects as $project)
            {
                if ( ! $project->nfnWorkflows->isEmpty())
                {
                    Flash::error(trans('expeditions.expedition_process_exists'));

                    return false;
                }
            }

            $this->groupContract->delete($group);

            event('group.deleted');

            Flash::success(trans('groups.group_deleted'));

            return true;
        }
        catch (\Exception $e)
        {
            Flash::error(trans('groups.group_deleted_failed'));

            return false;
        }
    }

    /**
     * Destroy Group.
     *
     * @param $group
     * @return bool
     */
    public function destroyGroup($group)
    {
        try
        {
            if ( ! $group->trashedProjects->isNotEmpty())
            {
                $group->trashedProjects()->forceDelete();
            }

            $this->groupContract->destroy($group);

            Flash::success(trans('groups.group_destroyed'));

            return true;
        }
        catch (\Exception $e)
        {
            Flash::error(trans('groups.group_destroyed_failed'));

            return false;
        }
    }

    /**
     * Restore Group.
     *
     * @param $group
     * @return \App\Services\Helpers\Flash
     */
    public function restoreGroup($group)
    {
        return $this->groupContract->restore($group) ?
            Flash::success(trans('groups.group_restored')) :
            Flash::error(trans('groups.group_restored_failed'));
    }
}