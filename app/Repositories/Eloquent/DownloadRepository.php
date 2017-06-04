<?php

namespace App\Repositories\Eloquent;

use App\Models\Download;
use App\Repositories\Contracts\DownloadContract;
use Illuminate\Contracts\Container\Container;

class DownloadRepository extends BaseEloquentRepository implements DownloadContract
{
    /**
     * ActorRepository constructor.
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->setContainer($container)
            ->setModel(Download::class)
            ->setRepositoryId('biospex.repository.download');
    }

    /**
     * @inheritdoc
     */
    public function updateOrCreateDownload(array $attributes = [], array $values = [])
    {
        return $this->updateOrCreateRecord($attributes, $values);
    }
}