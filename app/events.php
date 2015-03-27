<?php
/**
 * events.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <79e6ef82@opayq.com>
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

// User Login event
Event::listen('user.login', function ($userId, $email)
{
    Session::put('userId', $userId);
    Session::put('email', $email);
}, 10);

// User logout event
Event::listen('user.logout', function ()
{
    Session::flush();
}, 10);

// Subscribe to User Mailer events
Event::subscribe('Biospex\Mailer\BiospexMailer');

Event::listen('eloquent.saving: *', function ()
{
    Cache::flush();
});

Event::listen('eloquent.saved: *', function ()
{
    Cache::flush();
});

Event::listen('eloquent.deleted: *', function ()
{
    Cache::flush();
});

Queue::failing(function ($connection, $job, $data)
{
    \Event::fire('user.sendreport', [
        'email'   => null,
        'subject' => trans('emails.failed_job_subject'),
        'view'    => 'emails.report-failed-jobs',
        'data'    => ['message' => trans('emails.failed_job_message', [$job->getJobId()])],
    ]);

    return;
});
