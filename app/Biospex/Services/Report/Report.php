<?php namespace Biospex\Services\Report;
/**
 * Report.php
 *
 * @package    Biospex Package
 * @version    1.0
 * @author     Robert Bruhn <bruhnrp@gmail.com>
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
use Illuminate\Support\Contracts\MessageProviderInterface;
use Biospex\Repo\User\UserInterface;
use Biospex\Repo\Group\GroupInterface;
use Biospex\Mailer\BiospexMailer;

class Report {
    /**
     * @var \Illuminate\Support\Contracts\MessageProviderInterface
     */
    protected $messages;

    /**
     * @var \Biospex\Repo\User\UserInterface
     */
    protected $user;

    /**
     * @var \Biospex\Mailer\BiospexMailer
     */
    protected $mailer;

    /**
     * Debug by showing output for different actions
     *
     * @var
     */
    protected $debug;

	/**
	 * Constructor
	 *
	 * @param MessageProviderInterface $messages
	 * @param UserInterface $user
	 * @param GroupInterface $group
	 * @param BiospexMailer $mailer
	 */
    public function __construct(
        MessageProviderInterface $messages,
        UserInterface $user,
		GroupInterface $group,
        BiospexMailer $mailer
    )
    {
        $this->messages = $messages;
        $this->user = $user;
		$this->group = $group;
        $this->mailer = $mailer;
    }

	/**
	 * Add error to message bag
	 *
	 * @param $error
	 */
    public function addError($error)
    {
        $this->messages->add('error', $error);

        return;
    }

	/**
	 * Report a simple error
	 *
	 * @param null $groupId
	 */
	public function reportSimpleError ($groupId = null)
    {
		$email = null;

        if ($this->debug)
            $this->debug();

		if ( ! is_null($groupId))
        {
			$group = $this->group->findWith($groupId, ['owner']);
			$email = $group->Owner->email;
        }

        $errorMessage = '';
        $messages = $this->messages->get('error');
        foreach ($messages as $message)
        {
            $errorMessage .= "$message<br /><br />";
        }
        $subject = trans('errors.error');
        $data = array('errorMessage' => $errorMessage);
        $view = 'emails.report-simple-error';

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data);

        return;
    }

	/**
	 * Current process for expedition completed successfully.
	 *
	 * @param $groupId
	 * @param $title
	 */
    public function processComplete($groupId, $title)
    {
		$group = $this->group->findWith($groupId, ['owner']);
		$email = $group->Owner->email;

        $subject = trans('emails.expedition_complete', array('expedition' => $title));
        $data = array(
            'completeMessage' => trans('emails.expedition_complete_message',
                array('expedition' => $title))
        );
        $view = 'emails.report-process-complete';

		if ($this->debug)
		{
			$this->addError(print_r($data, true));
			$this->debug();
		}

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data);

        return;
    }

	/**
	 * Expedition has missing images
	 *
	 * @param $groupId
	 * @param $title
	 * @param array $images
	 */
	public function missingImages ($groupId, $title, $images = array())
    {
        $group = $this->group->findWith($groupId, ['owner']);
		$email = $group->Owner->email;

        $subject = trans('emails.missing_images_subject');

        $data = array(
            'missingImageMessage' => trans('emails.missing_images'),
            'expeditionTitle' => $title,
			'missingImages' => trans('emails.missing_imgs'),
			'missingList' => implode("<br />", $images)
        );
        $view = 'emails.report-missing_images';

		if ($this->debug)
		{
			$this->addError(print_r($data, true));
			$this->debug();
		}

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data);
    }

	/**
	 * Send error during subject import
	 *
	 * @param $id
	 * @param $email
	 * @param $title
	 */
	public function importError($id, $email, $title)
	{
		$subject = trans('errors.error_import');
		$data = array(
			'importId' => $id,
			'projectTitle' => $title,
			'errorMessage' => print_r($this->messages->get('error'), true)
		);
		$view = 'emails.reporterror';

		if ($this->debug)
			$this->debug();

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data);
	}

	/**
	 * Send report for completed subject import
	 *
	 * @param $email
	 * @param $title
	 * @param $duplicated
	 * @param $rejected
	 * @param $attachments
	 */
	public function importComplete($email, $title, $duplicated, $rejected, $attachments)
	{
		$data = array(
			'projectTitle' => $title,
			'duplicateCount' => $duplicated,
			'rejectedCount' => $rejected,
		);
		$subject = trans('emails.import_complete');
		$view = 'emails.reportsubject';

		if ($this->debug)
		{
			$this->addError(print_r($data, true));
			$this->debug();
		}

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data, $attachments);
	}

	/**
	 * Set debug
	 *
	 * @param bool $value
	 */
	public function setDebug($value = false)
	{
		$this->debug = $value;
	}

	/**
	 * Dump messages during debug
	 */
    public function debug()
    {
		$messages = $this->messages->get('error');
        dd($messages);
    }

	/**
	 * Fire send report event
	 *
	 * @param $event
	 * @param $email
	 * @param $subject
	 * @param $data
	 * @param array $attachments
	 */
	protected function fireEvent ($event, $email, $subject, $data, $attachments = array())
	{
		\Event::fire($event, [
			'email' => $email,
			'subject' => $subject,
			'data' => $data,
			'attachment' => $attachments
		]);
	}

}