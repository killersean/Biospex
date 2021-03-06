<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * Class DateHelper
 * @package App\Facades
 */
class DateHelper extends Facade
{

    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return \App\Services\Helpers\DateHelper::class;
    }
}