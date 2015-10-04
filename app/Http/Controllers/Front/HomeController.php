<?php namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Jobs\SendContactEmail;
use App\Repositories\Contracts\Project;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Contracts\Config\Repository as Config;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * Get("/", as="home")
     *
     * @return Response
     */
    public function index()
    {
        return view('front.home');
    }

    /**
     * Show public project page.
     *
     * @param $slug
     * @param Project $repository
     * @return \Illuminate\View\View
     */
    public function project($slug, Project $repository)
    {
        $project = $repository->bySlug($slug);

        return view('project', compact('project'));
    }

    /**
     * Show help page
     *
     * @Get("help", as="help");
     */
    public function help()
    {
        return view('front.help');
    }

    /**
     * Display contact form.
     *
     * @Get("contact", as="contact")
     *
     * @return \Illuminate\View\View
     */
    public function getContact()
    {
        return view('front.contact');
    }

    /**
     * Send contact form.
     *
     * @param ContactFormRequest $request
     * @param Config $config
     * @return mixed
     */
    public function postContact(ContactFormRequest $request, Config $config)
    {
        $this->dispatch((new SendContactEmail($request))->onQueue($config->get('config.beanstalkd.default')));

        return redirect()->route('home')->with('success', trans('pages.contact_success'));
    }
}