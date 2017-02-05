<?php

namespace App\Services\Report;



class NfnProjectCreateReport extends Report
{

    public function complete($id)
    {
        $project = $this->project->with(['workflow.actors.contacts'])->find($id);

        $email = null;
        foreach($project->workflow->actors as $actor)
        {
            if ($actor->contacts->isEmpty())
            {
                continue;
            }

            foreach ($actor->contacts as $contact)
            {
                $email[] = $contact->email;
            }
        }

        if (null === $email)
        {
            return;
        }

        $data = [
            'mainMessage' => trans('emails.nfn_notification'),
            'projectContact' => $project->contact,
            'projectContactEmail'  => $project->contact_email,
            'projectTitle' => $project->title,
            'projectLongDescription' => $project->description_long
        ];

        $subject = trans('emails.nfn_notification_subject');
        $view = 'frontend.emails.report-nfn';

        $this->fireReportEvent($email, $subject, $view, $data);

        session_flash_push('success', trans('projects.project_created_notification'));
    }
}