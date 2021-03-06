<?php

namespace App\Services\Grid;

use Illuminate\Support\Facades\Route;
use App\Repositories\Interfaces\Subject;
use App\Repositories\Interfaces\Expedition;
use App\Repositories\Interfaces\Header;
use Exception;

class JqGridJsonEncoder
{

    /**
     * @var Subject
     */
    protected $subjectContract;

    /**
     * @var Expedition
     */
    protected $expeditionContract;

    /**
     * @var Header
     */
    protected $headerContract;

    /**
     * @var
     */
    protected $excel;

    /**
     * @var
     */
    protected $route;

    /**
     * @var
     */
    protected $defaultGridVisible;

    /**
     * @var
     */
    protected $defaultSubGridVisible;

    /**
     * JqGridJsonEncoder constructor.
     * @param Subject $subjectContract
     * @param Expedition $expeditionContract
     * @param Header $headerContract
     */
    public function __construct(
        Subject $subjectContract,
        Expedition $expeditionContract,
        Header $headerContract
    )
    {
        $this->subjectContract = $subjectContract;
        $this->expeditionContract = $expeditionContract;
        $this->headerContract = $headerContract;

        $this->defaultGridVisible = config('config.defaultGridVisible');
        $this->defaultSubGridVisible = config('config.defaultSubGridVisible');
    }

    /**
     * Load grid model.
     *
     * @param $projectId
     * @param $route
     * @return string
     */
    public function loadGridModel($projectId, $route)
    {

        $this->route = $route;

        $result = $this->headerContract->findBy('project_id', $projectId);

        if (empty($result))
        {
            $headers['image'] = [
                'assigned',
                'id',
                'accessURI',
                'ocr'
            ];
        }
        else
        {
            $headers = $result->header;
            array_unshift($headers['image'], 'assigned', 'id');
            array_push($headers['image'], 'ocr');
        }

        $colNames = $headers['image'];
        $colModel = $this->setColModel($colNames);

        $subColNames = isset($headers['occurrence']) ? $this->setColNames($headers['occurrence']) : [];
        $subColModel = isset($headers['occurrence']) ? $this->setColModel($subColNames) : [];

        $colNamesResult = array_merge($colNames, $subColNames);
        $colModelResult = array_merge($colModel, $subColModel);

        $data = [
            'colNames' => $colNamesResult,
            'colModel' => $colModelResult
        ];

        return json_encode($data);
    }

    public function setColNames($fields)
    {
        $names = [];
        foreach ($fields as $field)
        {
            $names[] = 'occurrence.' . $field;
        }

        return $names;
    }

    /**
     * Build column model for grid.
     * @param $colNames
     * @return array
     */
    protected function setColModel($colNames)
    {
        $colModel = [];
        foreach ($colNames as $column)
        {
            $colModel[] = $this->formatGridColumn($column);
        }

        return $colModel;
    }

    /**
     * Format the given column for grid model.
     *
     * @param $column
     * @return array
     */
    protected function formatGridColumn($column)
    {
        if ($column === 'assigned')
        {
            return $this->buildExpeditionCheckbox();
        }

        $col = $this->setNormalColumnProperties($column);

        if ($column === 'ocr')
        {
            $col = array_merge($col, [
                'title'    => false,
                'classes'  => 'ocrPreview',
                'cellattr' => 'addDataAttr'
            ]);
        }

        if ($column === 'accessURI')
        {
            $col = $this->addUriLink($col);
        }

        return $col;
    }

    protected function setNormalColumnProperties($column, $image = true)
    {
        $default = $image ? $this->defaultGridVisible : $this->defaultSubGridVisible;

        $col = [
            'name'          => $column,
            'index'         => $column,
            'key'           => false,
            'resizable'     => true,
            'search'        => true,
            'sortable'      => true,
            'editable'      => false,
            'hidden'        => in_array($column, $default) ? false : true,
            'searchoptions' => [
                'sopt'     => [
                    'eq',
                    'ne',
                    'bw',
                    'bn',
                    'ew',
                    'en',
                    'cn',
                    'nc',
                    'nu',
                    'nn'
                ], 'value' => ':Any;true:Yes;false:No']
        ];

        return $col;
    }

    /**
     * Add uri link.
     * @param $col
     * @return array
     */
    protected function addUriLink($col)
    {
        return array_merge($col, [
            'classes'   => 'thumbPreview',
            'formatter' => 'imagePreview'
        ]);

    }

    /**
     * Build expedition checkbox.
     * @return array
     */
    protected function buildExpeditionCheckbox()
    {
        return [
            'name'          => 'expedition_ids',
            'index'         => 'expedition_ids',
            'width'         => 100,
            'align'         => 'center',
            'hidedlg'       => true,
            'stype'         => 'select',
            'searchoptions' => ['sopt' => ['eq'], 'value' => 'all:All;true:Yes;false:No']
        ];
    }

    /**
     * Echo in a jqGrid compatible format the data requested by a grid.
     *
     * @param $postedData
     * @param $route
     * @param $projectId
     * @param null $expeditionId
     * @return string
     * @throws Exception
     */
    public function encodeGridRequestedData($postedData, $route, $projectId, $expeditionId = null)
    {
        $vars = [
            'page'         => $this->setPage($postedData),
            'limit'        => $this->setLimit($postedData),
            'count'        => null,
            'offset'       => null,
            'sidx'         => $this->setSidx($postedData),
            'sord'         => $this->setSord($postedData),
            'filters'      => $this->setFilters($postedData),
            'route'        => $route,
            'projectId'    => $projectId,
            'expeditionId' => $expeditionId
        ];

        $vars['count'] = $this->subjectContract->getTotalRowCount($vars);

        $vars['limit'] = count($vars['limit']) === 0 ? $vars['count'] : $vars['limit'];

        if ( ! is_int($vars['count']))
        {
            throw new Exception('The method getTotalNumberOfRows must return an integer');
        }

        $totalPages = $this->setTotalPages($vars['count'], $vars['limit']);

        $vars['page'] = ($vars['page'] > $totalPages) ? $totalPages : $vars['page'];
        $vars['limit'] = $vars['limit'] < 0 ? 0 : $vars['limit'];
        $vars['offset'] = $vars['limit'] * $vars['page'] - $vars['limit'];
        $vars['offset'] = $vars['offset'] < 0 ? 0 : $vars['offset'];
        $vars['limit'] *= $vars['page'];

        if (empty($postedData['pivotRows']))
        {
            // $limit, $start, $sidx, $sord, $filters
            $rows = $this->subjectContract->getRows($vars);
        }
        else
        {
            $rows = json_decode($postedData['pivotRows'], true);
        }

        if ( ! is_array($rows) || (isset($rows[0]) && ! is_array($rows[0])))
        {
            throw new Exception('The method getRows must return an array of arrays, example: array(array("column1"  =>  "1-1", "column2" => "1-2"), array("column1" => "2-1", "column2" => "2-2"))');
        }

        // Prefix occurrence fields, merge into row, unset occurrence
        foreach ($rows as $key => $row)
        {
            $row['occurrence'] = array_combine(
                array_map(function ($k)
                {
                    return 'occurrence.' . $k;
                }, array_keys($row['occurrence'])), $row['occurrence']
            );

            $rows[$key] = array_merge($row, $row['occurrence']);
            unset($rows[$key]['occurrence']);
        }

        if (isset($postedData['exportFormat']))
        {
        }
        else
        {
            return json_encode([
                'page'    => $vars['page'],
                'total'   => $totalPages,
                'records' => $vars['count'],
                'rows'    => $rows,
            ]);
        }
    }

    /**
     * Echo in a jqGrid compatible format the data requested by a grid.
     * @return string
     * @throws Exception
     */
    public function encodeSubGridRequestedData()
    {
        $subjectId = Route::input('subjects');

        $row = $this->subjectContract->findBy('_id', $subjectId)->toArray();

        if ( ! $row)
        {
            throw new Exception('The method must return row');
        }

        return json_encode([
            'page'    => 1,
            'total'   => 1,
            'records' => count($row) === 0 ? 0 : 1,
            'rows'    => [$row['occurrence']],
        ]);
    }

    /**
     * @param $postedData
     * @return int
     */
    public function setPage($postedData)
    {
        return isset($postedData['page']) ? $postedData['page'] : 1;
    }

    /**
     * @param $postedData
     * @return array
     */
    public function setLimit($postedData)
    {
        return isset($postedData['rows']) ? $postedData['rows'] : null;
    }

    /**
     * @param $postedData
     * @return array
     */
    public function setSidx($postedData)
    {
        $sidx = isset($postedData['sidx']) ? $postedData['sidx'] : null;

        return ( ! $sidx || empty($sidx)) ? null : $sidx;
    }

    /**
     * @param $postedData
     * @return array
     */
    public function setSord($postedData)
    {
        $sord = isset($postedData['sord']) ? $postedData['sord'] : null;

        return ( ! $sord || empty($sord)) ? null : $sord;
    }

    /**
     * @param $postedData
     * @return array
     */
    public function setFilters($postedData)
    {
        return (isset($postedData['filters']) && ! empty($postedData['filters'])) ?
            json_decode(str_replace('\'', '"', $postedData['filters']), true) : [];
    }

    /**
     * @param $count
     * @param $limit
     * @return float|int
     */
    public function setTotalPages($count, $limit)
    {
        if ($count > 0)
        {
            $totalPages = ceil($count / $limit);
            return $totalPages;
        }
        else
        {
            $totalPages = 0;
            return $totalPages;
        }
    }

    /**
     * Takes a number and converts it to a-z,aa-zz,aaa-zzz, etc with uppercase option
     *
     * @access    public
     * @param    int    number to convert
     * @param    bool    upper case the letter on return?
     * @return    string    letters from number input
     */
    protected function num_to_letter($num, $uppercase = false)
    {
        --$num;

        $letter = chr(($num % 26) + 97);
        $letter .= (floor($num / 26) > 0) ? str_repeat($letter, floor($num / 26)) : '';

        return ($uppercase ? strtoupper($letter) : $letter);
    }
}
