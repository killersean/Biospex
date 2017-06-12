<?php 

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Jobs\SendContactEmailJob;
use App\Repositories\Contracts\AmChartContract;
use App\Repositories\Contracts\FaqContract;
use App\Repositories\Contracts\PanoptesTranscriptionContract;
use App\Repositories\Contracts\ProjectContract;
use App\Http\Requests\ContactFormRequest;

class HomeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param ProjectContract $projectContract
     * @param PanoptesTranscriptionContract $panoptesTranscriptionContract
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ProjectContract $projectContract, PanoptesTranscriptionContract $panoptesTranscriptionContract)
    {
        $carouselProjects = $projectContract->getRandomProjectsForCarousel(5);
        $recentProjects = $projectContract->getRecentProjects(5);
        $transcriptionCount = number_format($panoptesTranscriptionContract->getTotalTranscriptions());
        $contributorCount = number_format($panoptesTranscriptionContract->getContributorCount());

        return view('frontend.home', compact('carouselProjects', 'recentProjects', 'transcriptionCount', 'contributorCount'));
    }

    /**
     * Show public project page.
     *
     * @param $slug
     * @param ProjectContract $projectContract
     * @return \Illuminate\View\View
     */
    public function project($slug, ProjectContract $projectContract)
    {
        $project = $projectContract->setCacheLifetime(0)
            ->with(['group.users.profile', 'expeditions.stat', 'expeditions.actors', 'amChart'])
            ->where('slug', '=', $slug)
            ->findFirst();
        $expeditions = null;
        if ( ! $project->expeditions->isEmpty())
        {
            foreach ($project->expeditions as $expedition)
            {
                if (null === $expedition->deleted_at)
                {
                    $expeditions[] = $expedition;
                }
            }
        }

        return view('frontend.project', compact('project', 'expeditions'));
    }

    /**
     * Return project list for home page.
     *
     * @param ProjectContract $projectContract
     * @param $count
     * @return mixed
     */
    public function projects(ProjectContract $projectContract, $count = 5)
    {
        $recentProjects = $projectContract->getRecentProjects($count+5);

        return view('frontend.layouts.partials.home-project-list', compact('recentProjects'));
    }

    /**
     * Load AmChart for project home page.
     *
     * @param AmChartContract $amChartContract
     * @param $projectId
     * @return mixed
     */
    public function loadAmChart(AmChartContract $amChartContract, $projectId)
    {
        $record = $amChartContract->setCacheLifetime(0)->findBy('project_id', $projectId);

        return json_decode($record->data);
    }

    /**
     * Show faq page.
     *
     * @param FaqContract $faqContract
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function faq(FaqContract $faqContract)
    {
        $faqs = $faqContract->orderBy('id','asc')->findAll();
                
        return view('frontend.faq', compact('faqs'));
    }

    /**
     * Display contact form.
     *
     * @return \Illuminate\View\View
     */
    public function getContact()
    {
        return view('frontend.contact');
    }

    /**
     * Send contact form.
     *
     * @param ContactFormRequest $request
     * @return mixed
     */
    public function postContact(ContactFormRequest $request)
    {
        $data = $request->only('first_name', 'last_name', 'email', 'message');

        $this->dispatch(new SendContactEmailJob($data));

        return redirect()->route('home')->with('success', trans('pages.contact_success'));
    }

    public function team()
    {
        return view('frontend.team');
    }

    public function vision()
    {
        return view('frontend.vision');
    }
}
