<?php

// Route Patterns
Route::pattern('id', '[0-9]+');

// Admin routes
Route::group(
    [
        'domain'     => env('APP_DOMAIN'),
        'middleware' => ['web', 'auth'],
        'namespace'  => 'Backend',
        'prefix'     => 'admin'
    ],
    function ()
    {

        // Admin home page
        Route::get('dashboard', [
            'uses' => 'DashboardController@index',
            'as'   => 'dashboard.get.index'
        ]);

        Route::get('ocr', [
            'uses' => 'DashboardController@ocr',
            'as'   => 'ocr.get.index'
        ]);

        Route::post('ocr', [
            'uses' => 'DashboardController@ocr',
            'as'   => 'ocr.post.index'
        ]);

        Route::get('phpinfo', [
            'uses' => 'DashboardController@phpinfo',
            'as'   => 'phpinfo.get.index'
        ]);
    });

Route::group(
    [
        'domain'     => env('APP_DOMAIN'),
        'middleware' => ['web'],
        'namespace'  => 'Frontend',
        'prefix'     => Local::setLocale(),
        'before'     => 'LocalRedirectFilter'
    ],
    function ()
    {
        // testing
        Route::get('test', [
            'uses' => 'ServerInfoController@test',
            'as'   => 'server.get.test'
        ]);

        // Ajax poll event
        Route::get('poll', [
            'uses' => 'ServerInfoController@pollOcr',
            'as'   => 'server.get.pollOcr'
        ]);

        // Contact form
        Route::get('contact', [
            'uses' => 'HomeController@getContact',
            'as'   => 'home.get.contact'
        ]);

        Route::post('contact', [
            'uses' => 'HomeController@postContact',
            'as'   => 'home.post.contact'
        ]);
        // End Contact form

        // Home and Welcome
        Route::get('/', [
            'uses' => 'HomeController@index',
            'as'   => 'home'
        ]);
        // End Home and Welcome

        // Begin Help
        Route::get('help', [
            'uses' => 'HomeController@help',
            'as'   => 'home.get.help'
        ]);
        // End Help

        // Begin Team
        Route::get('team', [
            'uses' => 'HomeController@team',
            'as'   => 'home.get.team'
        ]);
        // End Team

        // Begin Project Slug
        Route::get('project/{slug}', [
            'uses' => 'HomeController@project',
            'as'   => 'home.get.project'
        ]);
        // End Project Slug

        // Begin AuthController
        Route::get('/login', [
            'uses' => 'AuthController@getLogin',
            'as'   => 'auth.get.login'
        ]);

        Route::post('/login', [
            'uses' => 'AuthController@postLogin',
            'as'   => 'auth.post.login'
        ]);

        Route::get('/logout', [
            'uses' => 'AuthController@getLogout',
            'as'   => 'auth.get.logout'
        ]);

        Route::get('register/{code?}', [
            'uses' => 'AuthController@getRegister',
            'as'   => 'auth.get.register'
        ]);

        Route::post('register', [
            'uses' => 'AuthController@postRegister',
            'as'   => 'auth.post.register'
        ]);

        Route::get('/users/{id}/activate/{code}', [
            'uses' => 'AuthController@getActivate',
            'as'   => 'auth.get.activate'
        ]);

        Route::get('resend', [
            'uses' => 'AuthController@getResendActivation',
            'as'   => 'auth.get.resend'
        ]);

        Route::post('resend', [
            'uses' => 'AuthController@postResendActivation',
            'as'   => 'auth.post.resend'
        ]);
        // End AuthController

        // Begin PasswordController
        Route::get('password/email', [
            'uses' => 'PasswordController@getEmail',
            'as'   => 'password.get.email'
        ]);

        Route::post('password/email', [
            'uses' => 'PasswordController@postEmail',
            'as'   => 'password.post.email'
        ]);

        Route::get('password/reset/{token}', [
            'uses' => 'PasswordController@getReset',
            'as'   => 'password.get.reset'
        ]);

        Route::post('password/reset', [
            'uses' => 'PasswordController@postReset',
            'as'   => 'password.post.reset'
        ]);
        // End PasswordsController

        Route::get('projects/{projects}/expeditions/{expeditions}/downloads/{downloads}', [
            'uses' => 'DownloadsController@show',
            'as'   => 'projects.expeditions.downloads.get.show',
        ]);

        Route::group(
            [
                'middleware' => ['auth'],// ['auth', 'admin'],
            ],
            function ()
            {
                // Begin PasswordController
                Route::put('password/{id}/pass', [
                    'uses' => 'PasswordController@pass',
                    'as'   => 'password.put.pass'
                ]);
                // End PasswordController

                // Begin UsersController
                Route::get('users', [
                    'uses' => 'UsersController@index',
                    'as'   => 'users.get.index'
                ]);

                Route::get('users/{users}', [
                    'uses' => 'UsersController@show',
                    'as'   => 'users.get.show'
                ]);

                Route::get('users/{users}/edit', [
                    'uses' => 'UsersController@edit',
                    'as'   => 'users.get.edit'
                ]);

                Route::put('users/{users}', [
                    'uses' => 'UsersController@update',
                    'as'   => 'users.put.update'
                ]);

                Route::delete('users/{users}', [
                    'uses' => 'UsersController@destroy',
                    'as'   => 'users.delete.delete'
                ]);
                // End UsersController

                // Begin GroupsController
                Route::get('groups', [
                    'uses' => 'GroupsController@index',
                    'as'   => 'groups.get.index'
                ]);

                Route::get('groups/create', [
                    'uses' => 'GroupsController@create',
                    'as'   => 'groups.get.create'
                ]);

                Route::post('groups', [
                    'uses' => 'GroupsController@store',
                    'as'   => 'groups.post.store'
                ]);

                Route::get('groups/{groups}', [
                    'uses' => 'GroupsController@show',
                    'as'   => 'groups.get.show'
                ]);

                Route::get('groups/{groups}/edit', [
                    'uses' => 'GroupsController@edit',
                    'as'   => 'groups.get.edit'
                ]);

                Route::put('groups/{groups}', [
                    'uses' => 'GroupsController@update',
                    'as'   => 'groups.put.update'
                ]);

                Route::delete('groups/{groups}', [
                    'uses' => 'GroupsController@delete',
                    'as'   => 'groups.delete.delete'
                ]);
                // End GroupsController

                // Group invite routes
                Route::get('groups/{groups}/invites', [
                    'uses' => 'InvitesController@index',
                    'as'   => 'invites.get.index'
                ]);

                Route::post('groups/{groups}/invites', [
                    'uses' => 'InvitesController@store',
                    'as'   => 'invites.post.store'
                ]);

                Route::post('groups/{groups}/invites/{invites}/resend', [
                    'uses' => 'InvitesController@resend',
                    'as'   => 'invites.post.resend'
                ]);

                Route::delete('groups/{groups}/invites/{invites}', [
                    'uses' => 'InvitesController@delete',
                    'as'   => 'invites.delete.delete'
                ]);

                // Begin ProjectsController
                Route::get('projects', [
                    'uses' => 'ProjectsController@index',
                    'as'   => 'projects.get.index'
                ]);

                Route::get('projects/create', [
                    'uses' => 'ProjectsController@create',
                    'as'   => 'projects.get.create'
                ]);

                Route::post('projects/create', [
                    'uses' => 'ProjectsController@store',
                    'as'   => 'projects.post.store'
                ]);

                Route::get('projects/{projects}', [
                    'uses' => 'ProjectsController@show',
                    'as'   => 'projects.get.show'
                ]);

                Route::get('projects/{projects}/edit', [
                    'uses' => 'ProjectsController@edit',
                    'as'   => 'projects.get.edit'
                ]);

                Route::put('projects/{projects}', [
                    'uses' => 'ProjectsController@update',
                    'as'   => 'projects.put.update'
                ]);

                Route::delete('projects/{projects}', [
                    'uses' => 'ProjectsController@delete',
                    'as'   => 'projects.delete.delete'
                ]);

                Route::get('projects/{projects}/duplicate', [
                    'uses' => 'ProjectsController@duplicate',
                    'as'   => 'projects.get.duplicate'
                ]);

                Route::get('projects/{projects}/advertise', [
                    'uses' => 'ProjectsController@advertise',
                    'as'   => 'projects.get.advertise'
                ]);

                Route::get('projects/{projects}/advertiseDownload', [
                    'uses' => 'ProjectsController@advertiseDownload',
                    'as'   => 'projects.get.advertiseDownload'
                ]);

                Route::get('projects/{projects}/explore', [
                    'uses' => 'ProjectsController@explore',
                    'as'   => 'projects.get.explore'
                ]);
                // End ProjectsController

                // Begin Import Controller
                Route::get('projects/{projects}/import', [
                    'uses' => 'ImportsController@import',
                    'as'   => 'projects.get.import'
                ]);

                Route::post('projects/{projects}/import', [
                    'uses' => 'ImportsController@upload',
                    'as'   => 'projects.post.upload'
                ]);
                // End Import Controller

                // Begin Expeditions Controller
                Route::get('expeditions', [
                    'uses' => 'ExpeditionsController@index',
                    'as'   => 'expeditions.get.index'
                ]);

                Route::get('projects/{projects}/expeditions', [
                    'uses' => 'ExpeditionsController@ajax',
                    'as'   => 'projects.expeditions.get.ajax'
                ]);

                Route::get('projects/{projects}/expeditions/create', [
                    'uses' => 'ExpeditionsController@create',
                    'as'   => 'projects.expeditions.get.create'
                ]);

                Route::post('projects/{projects}/expeditions', [
                    'uses' => 'ExpeditionsController@store',
                    'as'   => 'projects.expeditions.post.store'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}', [
                    'uses' => 'ExpeditionsController@show',
                    'as'   => 'projects.expeditions.get.show'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}/edit', [
                    'uses' => 'ExpeditionsController@edit',
                    'as'   => 'projects.expeditions.get.edit'
                ]);

                Route::put('projects/{projects}/expeditions/{expeditions}', [
                    'uses' => 'ExpeditionsController@update',
                    'as'   => 'projects.expeditions.put.update'
                ]);

                Route::delete('projects/{projects}/expeditions/{expeditions}', [
                    'uses' => 'ExpeditionsController@delete',
                    'as'   => 'projects.expeditions.delete.delete'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}/duplicate', [
                    'uses' => 'ExpeditionsController@duplicate',
                    'as'   => 'projects.expeditions.get.duplicate'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}/process', [
                    'uses' => 'ExpeditionsController@process',
                    'as'   => 'projects.expeditions.get.process'
                ]);

                Route::delete('projects/{projects}/expeditions/{expeditions}/stop', [
                    'uses' => 'ExpeditionsController@stop',
                    'as'   => 'projects.expeditions.delete.stop'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}/downloads', [
                    'uses' => 'DownloadsController@index',
                    'as'   => 'projects.expeditions.downloads.get.index'
                ]);

                Route::get('projects/{projects}/expeditions/{expeditions}/ocr', [
                    'uses' => 'ExpeditionsController@ocr',
                    'as'   => 'projects.expeditions.get.ocr'
                ]);

                // Project/Grid
                Route::get('/projects/{projects}/grids/load', ['as' => 'projects.grids.load', 'uses' => 'GridsController@load']);
                Route::get('/projects/{projects}/grids/explore', ['as' => 'projects.grids.explore', 'uses' => 'GridsController@explore']);
                Route::get('/projects/{projects}/grids/expeditions/create', ['as' => 'projects.grids.expeditions.create', 'uses' => 'GridsController@expeditionsCreate']);
                Route::get('/projects/{projects}/grids/expeditions/{expeditions}', ['as' => 'projects.grids.expeditions.show', 'uses' => 'GridsController@expeditionsShow']);
                Route::get('/projects/{projects}/grids/expeditions/{expeditions}/edit', ['as' => 'projects.grids.expeditions.edit', 'uses' => 'GridsController@expeditionsEdit']);

                // ImagesController
                Route::get('images/html', [
                    'uses' => 'ImagesController@html',
                    'as'   => 'images.html'
                ]);

                Route::get('images/preview', [
                    'uses' => 'ImagesController@preview',
                    'as'   => 'images.preview'
                ]);
            }
        );
    }
);
