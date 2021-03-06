<?php

namespace App\Providers;

use App\Observers\PanoptesTranscriptionObserver;
use App\Repositories\Eloquent\ProjectResourceRepository;
use App\Repositories\Interfaces\ProjectResource;
use Illuminate\Support\ServiceProvider;

use App\Repositories\Interfaces\ActorContact;
use App\Repositories\Interfaces\Actor;
use App\Repositories\Interfaces\AmChart;
use App\Repositories\Interfaces\ApiUser;
use App\Repositories\Interfaces\Download;
use App\Repositories\Interfaces\Expedition;
use App\Repositories\Interfaces\ExpeditionStat;
use App\Repositories\Interfaces\ExportQueue;
use App\Repositories\Interfaces\FaqCategory;
use App\Repositories\Interfaces\Faq;
use App\Repositories\Interfaces\Group;
use App\Repositories\Interfaces\Header;
use App\Repositories\Interfaces\Import;
use App\Repositories\Interfaces\Invite;
use App\Repositories\Interfaces\Meta;
use App\Repositories\Interfaces\NfnWorkflow;
use App\Repositories\Interfaces\Notice;
use App\Repositories\Interfaces\OcrCsv;
use App\Repositories\Interfaces\OcrQueue;
use App\Repositories\Interfaces\PanoptesTranscription;
use App\Repositories\Interfaces\Project;
use App\Repositories\Interfaces\Property;
use App\Repositories\Interfaces\Resource;
use App\Repositories\Interfaces\State;
use App\Repositories\Interfaces\Subject;
use App\Repositories\Interfaces\TeamCategory;
use App\Repositories\Interfaces\Team;
use App\Repositories\Interfaces\TranscriptionLocation;
use App\Repositories\Interfaces\Translation;
use App\Repositories\Interfaces\User;
use App\Repositories\Interfaces\WeDigBioDashboard;
use App\Repositories\Interfaces\Workflow;
use App\Repositories\Interfaces\WorkflowManager;

use App\Repositories\Eloquent\ActorContactRepository;
use App\Repositories\Eloquent\ActorRepository;
use App\Repositories\Eloquent\AmChartRepository;
use App\Repositories\Eloquent\ApiUserRepository;
use App\Repositories\Eloquent\DownloadRepository;
use App\Repositories\Eloquent\ExpeditionRepository;
use App\Repositories\Eloquent\ExpeditionStatRepository;
use App\Repositories\Eloquent\ExportQueueRepository;
use App\Repositories\Eloquent\FaqCategoryRepository;
use App\Repositories\Eloquent\FaqRepository;
use App\Repositories\Eloquent\GroupRepository;
use App\Repositories\Eloquent\HeaderRepository;
use App\Repositories\Eloquent\ImportRepository;
use App\Repositories\Eloquent\InviteRepository;
use App\Repositories\Eloquent\MetaRepository;
use App\Repositories\Eloquent\NfnWorkflowRepository;
use App\Repositories\Eloquent\NoticeRepository;
use App\Repositories\Eloquent\OcrCsvRepository;
use App\Repositories\Eloquent\OcrQueueRepository;
use App\Repositories\MongoDb\PanoptesTranscriptionRepository;
use App\Repositories\Eloquent\ProjectRepository;
use App\Repositories\Eloquent\PropertyRepository;
use App\Repositories\Eloquent\ResourceRepository;
use App\Repositories\Eloquent\StateCountyRepository;
use App\Repositories\MongoDb\SubjectRepository;
use App\Repositories\Eloquent\TeamCategoryRepository;
use App\Repositories\Eloquent\TeamRepository;
use App\Repositories\Eloquent\TranscriptionLocationRepository;
use App\Repositories\Eloquent\TranslationRepository;
use App\Repositories\Eloquent\UserRepository;
use App\Repositories\MongoDb\WeDigBioDashboardRepository;
use App\Repositories\Eloquent\WorkflowManagerRepository;
use App\Repositories\Eloquent\WorkflowRepository;

class BiospexServiceProvider extends ServiceProvider
{
    public function boot()
    {
        require app_path('Macros/macros.php');

        $this->setViewComposers();
        $this->setObservers();
    }
    
    public function register()
    {
        $this->registerRepositories();
        $this->registerFacades();
    }

    /**
     * Set up view composers
     */
    public function setViewComposers()
    {
        view()->composer(
            'frontend.layouts.notices', 'App\Http\ViewComposers\NoticesComposer'
        );

        view()->composer(
            'frontend.layouts.partials.process-modal', 'App\Http\ViewComposers\EchoVarsComposer'
        );
    }

    /**
     * Set observers
     */
    public function setObservers()
    {
        \App\Models\PanoptesTranscription::observe(PanoptesTranscriptionObserver::class);
    }

    /**
     * Register Repositories
     */
    protected function registerRepositories()
    {
        $this->app->bind(ActorContact::class, ActorContactRepository::class);
        $this->app->bind(Actor::class, ActorRepository::class);
        $this->app->bind(AmChart::class, AmChartRepository::class);
        $this->app->bind(ApiUser::class, ApiUserRepository::class);
        $this->app->bind(Download::class, DownloadRepository::class);
        $this->app->bind(Expedition::class, ExpeditionRepository::class);
        $this->app->bind(ExpeditionStat::class, ExpeditionStatRepository::class);
        $this->app->bind(ExportQueue::class, ExportQueueRepository::class);
        $this->app->bind(FaqCategory::class, FaqCategoryRepository::class);
        $this->app->bind(Faq::class, FaqRepository::class);
        $this->app->bind(Group::class, GroupRepository::class);
        $this->app->bind(Header::class, HeaderRepository::class);
        $this->app->bind(Import::class, ImportRepository::class);
        $this->app->bind(Invite::class, ImportRepository::class);
        $this->app->bind(Invite::class, InviteRepository::class);
        $this->app->bind(Meta::class, MetaRepository::class);
        $this->app->bind(NfnWorkflow::class, NfnWorkflowRepository::class);
        $this->app->bind(Notice::class, NoticeRepository::class);
        $this->app->bind(OcrCsv::class, OcrCsvRepository::class);
        $this->app->bind(OcrQueue::class, OcrQueueRepository::class);
        $this->app->bind(PanoptesTranscription::class, PanoptesTranscriptionRepository::class);
        $this->app->bind(Project::class, ProjectRepository::class);
        $this->app->bind(Property::class, PropertyRepository::class);
        $this->app->bind(Resource::class, ResourceRepository::class);
        $this->app->bind(State::class, StateCountyRepository::class);
        $this->app->bind(Subject::class, SubjectRepository::class);
        $this->app->bind(TeamCategory::class, TeamCategoryRepository::class);
        $this->app->bind(Team::class, TeamRepository::class);
        $this->app->bind(TranscriptionLocation::class, TranscriptionLocationRepository::class);
        $this->app->bind(Translation::class, TranslationRepository::class);
        $this->app->bind(User::class, UserRepository::class);
        $this->app->bind(WeDigBioDashboard::class, WeDigBioDashboardRepository::class);
        $this->app->bind(Workflow::class, WorkflowRepository::class);
        $this->app->bind(WorkflowManager::class, WorkflowManagerRepository::class);
        $this->app->bind(ProjectResource::class, ProjectResourceRepository::class);
    }

    /**
     * Registers custom facades
     */
    public function registerFacades()
    {
        $this->app->singleton('flash', function ()
        {
            return new \App\Services\Helpers\Flash();
        });

        $this->app->singleton('datehelper', function(){
            return new \App\Services\Helpers\DateHelper();
        });

        $this->app->singleton('generalhelper', function(){
            return new \App\Services\Helpers\GeneralHelper();
        });
    }
}