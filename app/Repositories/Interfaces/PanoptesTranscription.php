<?php

namespace App\Repositories\Interfaces;

use App\Repositories\RepositoryInterface;

interface PanoptesTranscription extends RepositoryInterface
{

    /**
     * @return mixed
     */
    public function getTotalTranscriptions();

    /**
     * @param $expeditionId
     * @return mixed
     */
    public function getTranscriptionCountByExpeditionId($expeditionId);

    /**
     * @param $projectId
     * @return mixed
     */
    public function getMinFinishedAtDateByProjectId($projectId);

    /**
     * @param $projectId
     * @return mixed
     */
    public function getMaxFinishedAtDateByProjectId($projectId);

    /**
     * @param $workflowId
     * @return mixed
     */
    public function getTranscriptionCountPerDate($workflowId);

    /**
     * @return mixed
     */
    public function getContributorCount();

    /**
     * @param $projectId
     * @return mixed
     */
    public function getUserTranscriptionCount($projectId);

    /**
     * @param $expeditionId
     * @param $timestamp
     * @return mixed
     */
    public function getTranscriptionForDashboardJob($expeditionId, $timestamp);
}
