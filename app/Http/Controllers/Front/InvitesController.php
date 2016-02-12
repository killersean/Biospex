<?php namespace Biospex\Http\Controllers\Front;

use Biospex\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Events\Dispatcher as Event;
use Biospex\Repositories\Contracts\Invite;
use Biospex\Repositories\Contracts\Group;
use Biospex\Repositories\Contracts\User;
use Biospex\Http\Requests\InviteFormRequest;
use Biospex\Jobs\InviteCreateJob;
use Biospex\Events\SendInviteEvent;

class InvitesController extends Controller
{
    /**
     * @var Invite
     */
    public $invite;

    /**
     * @var Group
     */
    public $group;

    /**
     * @var Request
     */
    public $request;

    /**
     * @var User
     */
    public $user;

    /**
     * InvitesController constructor.
     * @param Request $request
     * @param Invite $invite
     * @param Group $group
     * @param User $user
     */
    public function __construct(
        Request $request,
        Invite $invite,
        Group $group,
        User $user
    ) {
        $this->request = $request;
        $this->invite = $invite;
        $this->group = $group;
        $this->user = $user;
    }

    /**
     * Show invite form
     *
     * @param $id
     * @return \Illuminate\View\View
     */
    public function index($id)
    {
        $user = $this->request->user();
        $this->group->cached(false);
        $group = $this->group->findWith($id, ['invites']);

        if ( ! $this->checkPermissions($user, [$group], 'update'))
        {
            return redirect()->route('groups.get.show', [$id]);
        }

        return view('front.invites.index', compact('group'));
    }

    /**
     * Send invites to emails
     *
     * @param InviteFormRequest $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(InviteFormRequest $request, $id)
    {
        $user = $this->request->user();
        $group = $this->group->findWith($id, ['invites']);

        if ( ! $this->checkPermissions($user, [$group], 'update'))
        {
            return redirect()->route('groups.get.show', [$id]);
        }

        $this->dispatch(new InviteCreateJob($request, $group));

        return redirect()->route('invites.get.index', [$group->id]);
    }

    /**
     * Resend a group invite
     * @param Event $dispatcher
     * @param $id
     * @param $inviteId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function resend(Event $dispatcher, $id, $inviteId)
    {
        $user = $this->request->user();
        $group = $this->group->find($id);

        if ( ! $this->checkPermissions($user, [$group], 'update'))
        {
            return redirect()->route('groups.get.show', [$id]);
        }

        $invite = $this->invite->find($inviteId);

        if ($invite) {
            $data = [
                'email'   => $invite->email,
                'group'  => $invite->group_id,
                'code' => $invite->code
            ];

            $dispatcher->fire(new SendInviteEvent($data));

            session_flash_push('success', trans('groups.send_invite_success', ['group' => $group->name, 'email' => $invite->email]));
        } else {
            session_flash_push('warning', trans('groups.send_invite_error', ['group' => $group->name, 'email' => $invite->email]));
        }

        return redirect()->route('invites.get.index', [$group->id]);
    }

    /**
     * Delete invite
     * @param $id
     * @param $inviteId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete($id, $inviteId)
    {
        $user = $this->request->user();
        $group = $this->group->find($id);

        if ( ! $this->checkPermissions($user, [$group], 'delete'))
        {
            return redirect()->route('groups.get.show', [$id]);
        }

        if ($this->invite->destroy($inviteId)) {
            session_flash_push('success', trans('groups.invite_destroyed'));
        } else {
            session_flash_push('error', trans('groups.invite_destroyed_failed'));
        }

        return redirect()->route('invites.get.index', [$id]);
    }
}
