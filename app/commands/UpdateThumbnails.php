<?php
/**
 * UpdateThumbnails.php
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


use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Console\Input\InputArgument;
use Biospex\Services\Image\Thumbnail;
use Biospex\Repo\Subject\SubjectInterface;

class UpdateThumbnailsCommand extends Command
{
	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'thumbnails:update';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = "Create thumbnails for subjects.";

	/**
	 * Construct
	 *
	 * @param Thumbnail $thumbnail
	 * @param SubjectInterface $subject
	 */
	public function __construct(Thumbnail $thumbnail, SubjectInterface $subject)
	{
		parent::__construct();

		$this->thumbnail = $thumbnail;
		$this->subject = $subject;
	}

	/**
	 * Execute the console command.
	 *
	 * @return void
	 */
	public function fire()
	{
		$subjects = $this->subject->all();

		foreach ($subjects as $subject)
		{
			if ( ! $this->thumbnail->thumbFromUrl($subject->accessURI))
			{
				echo "Failed to create image for {$subject->accessURI}\n";
			}
		}

		return;
	}

}