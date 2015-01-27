<?php  namespace Biospex\Services\Report;
/**
 * OcrReport.php
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

class OcrReport extends Report{

	/**
	 * Send report for completed ocr processing.
	 *
	 * @param $email
	 * @param $title
	 * @param array $attachment
	 */
	public function complete($email, $title)
	{
		$attachment = $this->createAttachment();

		$data = array(
			'projectTitle' => $title,
			'mainMessage' => trans('projects.ocr_complete')
		);
		$subject = trans('emails.ocr_complete');
		$view = 'emails.reportocr';

		$this->fireEvent('user.sendreport', $email, $subject, $view, $data, $attachment);
	}
}