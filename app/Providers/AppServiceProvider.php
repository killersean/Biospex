<?php

namespace Biospex\Providers;

use Biospex\Events\SendReportEvent;
use Biospex\Models\Group;
use Biospex\Models\Permission;
use Biospex\Models\Profile;
use Biospex\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Support\ServiceProvider;
use Barryvdh\Debugbar\ServiceProvider as Debugbar;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider as IdeHelper;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->setupBlade();

        User::created(function ($user) {
            $user->getActivationCode();
            $profile = new Profile;
            $profile->user_id = $user->id;
            $profile->first_name = $this->app['request']->input('first_name');
            $profile->last_name = $this->app['request']->input('last_name');
            $user->profile()->save($profile);
        });

        Group::created(function ($group) {
            $permissions = Cache::tags('model')->rememberForever('permissions.list', function() {
                return Permission::lists('name', 'id')->all();
            });
            $permissions = array_keys(array_diff($permissions, ['superuser']));

            $group->permissions()->attach($permissions);
        });

        Queue::failing(function (JobFailed $event) {
            if ($event->job->getQueue() == Config::get('config.beanstalkd.default')) {
                return;
            }

            $data = [
                'email'   => null,
                'subject' => trans('emails.failed_job_subject'),
                'view'    => 'front.emails.report-failed-jobs',
                'data'    => ['text' => trans('emails.failed_job_message', ['id' => $event->job->getJobId(), 'jobData' => $event->job->getRawBody()])],
                'attachments' => []
            ];

            Event::fire(new SendReportEvent($data));

            return;
        });
    }

    /**
     * Set up blade extension.
     */
    protected function setupBlade()
    {
        $blade = $this->app['view']->getEngineResolver()->resolve('blade')->getCompiler();

        $blade->extend(function ($value) {
            return preg_replace('/(\s*)@(break|continue)(\s*)/', '$1<?php $2; ?>$3', $value);
        });
    }

    /**
     * Register any application services.
     *
     * This service provider is a great spot to register your various container
     * bindings with the application. As you can see, we are registering our
     * "Registrar" implementation here. You can add your own bindings too!
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'Illuminate\Contracts\Auth\Registrar',
            'Biospex\Services\Registrar'
        );


        $this->app->bind('Cartalyst\Sentry\Sentry', function ($app) {
            return $app['sentry'];
        });


        /*
         * Development Providers
         */
        if ($this->app->environment('local')) {
            $this->app->register(IdeHelper::class);
            $this->app->register(Debugbar::class);
        }
    }
}
