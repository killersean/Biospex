<?php namespace App\Repositories\Contracts;

interface OcrCsv extends Repository
{
    public function createOrFirst($attributes);
}

