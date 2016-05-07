<?php namespace App\Repositories\Contracts;

interface OcrQueue extends Repository
{
    public function findByProjectId($id);

    public function getSubjectRemainingSum($id);

    public function findFirstWith(array $with);
    
    public function updateOcrError($id);
}
