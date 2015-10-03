<?php  namespace App\Services\Report;

class OcrReport extends Report
{
    /**
     * Send report for completed ocr processing.
     *
     * @param $email
     * @param $title
     * @param $csv
     * @return array
     */
    public function complete($email, $title, $csv)
    {
        $count = count($csv);
        $attachment = $count ? $this->createAttachment($csv) : [];

        $data = [
            'projectTitle' => $title,
            'mainMessage' => trans('emails.ocr_complete_message')
        ];
        $subject = trans('emails.ocr_complete');
        $view = 'emails.report-simple';

        $this->fireEvent('user.sendreport', $email, $subject, $view, $data, $attachment);

        return $count == 0 ? false : $attachment;
    }
}
