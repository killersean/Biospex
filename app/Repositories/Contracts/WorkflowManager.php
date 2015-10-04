<?php namespace App\Repositories\Contracts;

interface WorkflowManager extends Repository
{
    /**
     * Return all records with relationship
     *
     * @param array $with
     * @return mixed
     */
    public function allWith($with = array());

    /**
     * Get workflow process by expedition id
     * 
     * @param $id
     * @return mixed
     */
    public function findByExpeditionId($id);
}