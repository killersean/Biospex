<?php
use Biospex\Repo\Header\HeaderInterface;
use Biospex\Services\Grid\JqGridJsonEncoder;
use Biospex\Repo\Project\ProjectInterface;
use Biospex\Repo\UserGridField\UserGridFieldInterface;
use Cartalyst\Sentry\Sentry;

class GridsController extends BaseController
{
    /**
     * @var
     */
    protected $grid;

    /**
     * @var
     */
    protected $project;

    /**
     * @var
     */
    protected $fields;

    /**
     * @var Sentry
     */
    protected $sentry;
    /**
     * @var HeaderInterface
     */
    private $header;

    /**
     * Constructor.
     *
     * @param JqGridJsonEncoder $grid
     * @param ProjectInterface $project
     * @param UserGridFieldInterface $fields
     * @param Sentry $sentry
     * @param HeaderInterface $header
     */
    public function __construct(
        JqGridJsonEncoder $grid,
        ProjectInterface $project,
        UserGridFieldInterface $fields,
        Sentry $sentry,
        HeaderInterface $header
    )
    {
        $this->grid = $grid;
        $this->project = $project;
        $this->fields = $fields;
        $this->sentry = $sentry;
        $this->header = $header;
        $this->beforeFilter('auth');
        $this->beforeFilter('csrf', ['on' => 'post']);

        $this->projectId = (int) \Route::input('projects');
        $this->expeditionId = (int) \Route::input('expeditions');
        $this->route = \Route::getCurrentRoute()->getName();
    }

    /**
     * Load grid model and column names
     */
    public function load()
    {
        return $this->grid->loadGridModel($this->projectId, $this->route);
    }

    /**
     * Load grid data.
     *
     * @throws Exception
     */
    public function explore()
    {
        return $this->grid->encodeGridRequestedData(Input::all(), $this->route, $this->projectId, $this->expeditionId);
    }

    public function expeditionsShow()
    {
        return $this->grid->encodeGridRequestedData(Input::all(), $this->route, $this->projectId, $this->expeditionId);
    }

    public function expeditionsEdit()
    {
        return $this->grid->encodeGridRequestedData(Input::all(), $this->route, $this->projectId, $this->expeditionId);
    }

    public function expeditionsCreate()
    {
        return $this->grid->encodeGridRequestedData(Input::all(), $this->route, $this->projectId, $this->expeditionId);
    }
}
