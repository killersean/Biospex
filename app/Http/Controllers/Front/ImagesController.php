<?php namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Services\Image\Thumbnail;

class ImagesController extends Controller
{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * @var Thumbnail
     */
    protected $thumbnail;

    /**
     * @var Request
     */
    protected $request;

    /**
     * Construct
     *
     * @param Thumbnail $thumbnail
     * @param Request $request
     */
    public function __construct(
        Thumbnail $thumbnail,
        Request $request
    )
    {
        $this->thumbnail = $thumbnail;
        $this->request = $request;
    }

    /**
     * Return resized image
     *
     * @return \Illuminate\Http\Response
     */
    public function preview()
    {
        $url = $this->request->input('url');
        $thumb = $this->thumbnail->getThumbNail(urldecode($url));

        return '<img src="data:image/jpeg;base64,' . base64_encode($thumb) . '" />';
    }
}
