<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class JobError extends Notification implements ShouldQueue
{
    use Queueable;
    /**
     * @var array
     */
    private $messages;

    /**
     * @var string
     */
    private $file;

    /**
     * Create a new notification instance.
     *
     * @param string $file
     * @param array $messages
     */
    public function __construct($file, array $messages = [])
    {
        $this->messages = $messages;
        $this->file = $file;
        $this->onQueue(config('config.beanstalkd.default'));
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via()
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail()
    {
        $message = implode('<br /><br />', $this->messages);

        return (new MailMessage)->markdown('mail.joberror', ['file' => $this->file, 'message' => $message]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            //
        ];
    }
}
