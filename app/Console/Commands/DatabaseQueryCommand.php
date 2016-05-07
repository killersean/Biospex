<?php namespace App\Console\Commands;

use App\Repositories\Contracts\Download;
use App\Repositories\Contracts\Group;
use App\Repositories\Contracts\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class DatabaseQueryCommand extends Command
{
    /**
     * The console command name.
     */
    protected $signature = 'db:query';

    /**
     * The console command description.
     */
    protected $description = 'Used to run queries on the database';
    /**
     * @var User
     */
    private $user;
    /**
     * @var Group
     */
    private $group;
    /**
     * @var Download
     */
    private $download;

    /**
     * Constructor
     */
    public function __construct(User $user, Group $group, Download $download)
    {
        parent::__construct();
        $this->user = $user;
        $this->group = $group;
        $this->download = $download;
    }

    /**
     * Handle command
     */
    public function handle()
    {
        DB::update('UPDATE profiles INNER JOIN users ON users.id = profiles.user_id SET profiles.timezone = users.timezone');
        DB::update('update groups set label = name');
        DB::update('update groups set name = lower(name)');
        DB::delete('delete from groups where name = "users"');

        $users = $this->user->all();
        foreach ($users as $user) {
            $user->uuid = ! empty($user->uuid) ? $user->uuid : Uuid::uuid4()->__toString();
            $user->save();
        }

        $groups = $this->group->all();
        foreach ($groups as $group) {
            $group->label = ucfirst($group->label);
            $group->uuid = ! empty($group->uuid) ? $group->uuid : Uuid::uuid4()->__toString();
            $group->save();
        }

        $downloads = $this->download->all();
        foreach ($downloads as $download) {
            $download->uuid = ! empty($download->uuid) ? $download->uuid : Uuid::uuid4()->__toString();
            $download->save();
        }

        return;
    }
}
