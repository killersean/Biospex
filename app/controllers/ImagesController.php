<?php
/**
 * ImagessController.php
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
use Biospex\Services\Image\Thumbnail;

class ImagesController extends \BaseController {

	/**
	 * @var Thumbnail
	 */
	protected $thumbnail;

	/**
	 * Construct
	 *
	 * @param Thumbnail $thumbnail
	 */
	public function __construct(Thumbnail $thumbnail)
	{
		$this->thumbnail = $thumbnail;
	}

	/**
	 * Build html used by jQuery qTip
	 *
	 * @return string
	 */
	public function html()
	{
		$url = Input::get('url');
		return '<div><img src="/images/preview?url='.urlencode($url).'" /></div>';
	}

	/**
	 * Return resized image for jQuery qTip
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function preview()
	{
		$url = Input::get('url');
		$thumb = $this->thumbnail->getThumbNail(urldecode($url));

		$response = Response::make($thumb, 200);
		$response->header('content-type', $this->thumbnail->getMimeType());

		// We return our image here.
		return $response;
	}
}