<?php

namespace App\Services\Api;

use Illuminate\Contracts\Cache\Repository as CacheRepository;
use League\OAuth2\Client\Provider\GenericProvider;
use Illuminate\Config\Repository as Config;
use Psr\Http\Message\ResponseInterface;
use RuntimeException;

class NfnApi
{

    /**
     * @var CacheRepository
     */
    private $cache;

    /**
     * @var Config
     */
    private $config;

    /**
     * @var GenericProvider
     */
    private $provider;

    /**
     * NfnApi constructor.
     * @param CacheRepository $cache
     * @param Config $config
     */
    public function __construct(CacheRepository $cache, Config $config)
    {
        $this->cache = $cache;
        $this->config = $config;
    }

    public function setProvider()
    {
        $this->provider = new GenericProvider([
            'clientId'                => $this->config->get('config.nfnApi.clientId'),
            'clientSecret'            => $this->config->get('config.nfnApi.clientSecret'),
            'redirectUri'             => $this->config->get('config.nfnApi.redirectUri'),
            'urlAccessToken'          => $this->config->get('config.nfnApi.tokenUri'),
            'urlAuthorize'            => '',
            'urlResourceOwnerDetails' => ''
        ]);
    }

    /**
     * Send authorized request.
     *
     * @param $uri
     * @return mixed
     */
    private function authorizedRequest($uri)
    {
        $request = $this->provider->getAuthenticatedRequest(
            'GET',
            $uri,
            $this->cache->get('nfnToken')->getToken(),
            [
                'headers' => [
                    'Content-Type'  => 'application/json',
                    'Accept'        => 'application/vnd.api+json; version=1'
                ]
            ]
        );

        $response = $this->provider->getHttpClient()->send($request);

        return $response->getBody()->getContents();
    }

    /**
     * Get project.
     *
     * @param $id
     * @return mixed
     */
    public function getProject($id)
    {
        $this->checkAccessToken();

        $uri = $this->config->get('config.nfnApi.apiUri') . '/projects/' . $id;

        return $this->authorizedRequest($uri);
    }

    /**
     * Get workflow.
     *
     * @param $id
     * @return mixed
     */
    public function getWorkflow($id)
    {
        $this->checkAccessToken();

        $uri = $this->config->get('config.nfnApi.apiUri') . '/workflows/' . $id;

        return $this->authorizedRequest($uri);
    }

    /**
     * Get classifications.
     *
     * @param $id
     * @param int $pageSize
     * @return mixed
     */
    public function getClassifications($id, $pageSize = 20)
    {
        $this->checkAccessToken();

        $uri = $this->config->get('config.nfnApi.apiUri') . '/classifications/project?workflow_id=' . $id . '&page_size=' . $pageSize;

        return $this->authorizedRequest($uri);
    }

    /**
     * Set access token.
     */
    public function setAccessToken()
    {
        $accessToken = $this->provider->getAccessToken('client_credentials');
        $this->cache->put('nfnToken', $accessToken, 120);
    }

    /**
     * Check access token.
     */
    public function checkAccessToken()
    {
        if (null === $this->cache->get('nfnToken') || $this->cache->get('nfnToken')->hasExpired())
        {
            $this->setAccessToken();
        }
    }

    /**
     * Check the response status code.
     *
     * @param ResponseInterface $response
     * @param int $expectedStatusCode
     *
     * @throws RuntimeException on unexpected status code
     */
    private function checkResponseStatusCode(ResponseInterface $response, $expectedStatusCode = 200)
    {
        $statusCode = $response->getStatusCode();

        if ($statusCode !== $expectedStatusCode)
        {
            throw new RuntimeException('NfN API returned status code ' . $statusCode . ' expected ' . $expectedStatusCode);
        }
    }
}