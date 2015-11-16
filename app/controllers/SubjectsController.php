<?php
/**
 * SubjectsController.php
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

use Biospex\Repo\Header\HeaderInterface;
use Biospex\Services\Grid\JqGridJsonEncoder;
use Biospex\Repo\Project\ProjectInterface;
use Biospex\Repo\UserGridField\UserGridFieldInterface;
use Cartalyst\Sentry\Sentry;

class SubjectsController extends BaseController
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
    }

    /**
     * Display subject page.
     *
     * @param $projectId
     * @return \Illuminate\View\View
     */
    public function index($projectId)
    {
        $project = $this->project->find($projectId);
        $user = $this->sentry->getUser();
        $isSuperUser = $user->isSuperUser();
        $isOwner = ($user->id == $project->group->user_id || $isSuperUser) ? true : false;

        return View::make('subjects.show', compact('project', 'isOwner'));
    }

    /**
     * Load grid model and column names
     */
    public function load()
    {
        return $this->grid->loadGridModel(Route::input('projects'));
    }

    /**
     * Load grid data.
     *
     * @throws Exception
     */
    public function showGrid()
    {
        return $this->grid->encodeGridRequestedData(Input::all());
    }
}
