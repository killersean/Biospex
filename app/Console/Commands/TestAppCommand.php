<?php

namespace App\Console\Commands;

use App\Repositories\Contracts\Project;
use App\Repositories\Contracts\WorkflowManager;
use Illuminate\Console\Command;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Client;

class TestAppCommand extends Command
{

    /**
     * The console command name.
     */
    protected $signature = 'test:test';

    /**
     * The console command description.
     */
    protected $description = 'Used to test code';

    /**
     * @var Project
     */
    private $project;

    /**
     * BuildAmChartData constructor.
     */
    public function __construct(Project $project)
    {
        parent::__construct();
        
        $this->project = $project;
    }

    public function fire()
    {
        $stageUrl = 'https://panoptes-staging.zooniverse.org/oauth/token?';
        $prodUrl = 'https://panoptes.zooniverse.org/oauth/token?';
        $clientId = 'e8ee800bdd04438cdb6a4f9569e9720d539b16c87127885cbb960651a7b3b760';
        $clientSecret = '827117d68168579e1fecd37ceb858302c02c12313b6dff08d610f465d0db8707';
        $redirectUrl = 'urn:ietf:wg:oauth:2.0:oob';



        $client = new \GuzzleHttp\Client(['cookies' => true, 'allow_redirects' => true]);

        $postResponse = $client->request('POST', $stageUrl, [
            'Content-Type' => 'application/x-www-form-urlencoded',
            'form_params' => [
                'grant_type'    => 'client_credentials',
                'client_id' => $clientId,
                'client_secret' => $clientSecret
            ]
        ]);

        //
        echo 'Sent post request' . PHP_EOL;

        $json = json_decode($postResponse->getBody());
        
        dd($json->access_token);

    }

}
