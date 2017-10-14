<?php 

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use DOMDocument;
use GuzzleHttp\Pool;
use Illuminate\Support\Facades\Artisan;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class ServerController extends Controller
{
    /**
     * @var mixed
     */
    protected $ocrDeleteUrl;

    /**
     * @var Client
     */
    protected $client;

    /**
     * Constructor
     *
     * @internal param Curl $curl
     */
    public function __construct()
    {
        $this->ocrDeleteUrl = config('config.ocrDeleteUrl');
        $this->client = New Client();
    }

    /**
     * Test $_POST
     */
    public function postTest()
    {
        http_response_code(200);

        exit;
    }

    /**
     * Test $_GET
     */
    public function getTest()
    {
        http_response_code(200);

        exit;
    }

    /**
     * Display php info
     */
    public function showPhpInfo()
    {
        $user = request()->user();

        if ( ! $user->isAdmin('admins')) {
            return redirect()->route('login');
        }

        ob_start();
        phpinfo();
        $phpinfo = ob_get_contents();
        ob_end_clean();

        $info = preg_replace('%^.*<body>(.*)</body>.*$%ms', '$1', $phpinfo);

        return view('frontend.info', compact('info'));
    }

    public function clear()
    {
        $user = request()->user();

        if ( ! $user->isAdmin('admins')) {
            return redirect()->route('login');
        }

        Cache::flush();
        // Need to curl to server and run php script to clear memcache

        session_flash_push('success', "Cache has been flushed.");

        return redirect()->intended('/projects');
    }

    public function ocr()
    {
        if (request()->isMethod('post') && ! empty(request()->get('files'))) {
            $files = request()->get('files');
            $requests = [];
            foreach ($files as $file)
            {
                $options = [
                    'headers' => ['Content-Type' => 'multipart/form-data', 'API-KEY' => 't$p480UAJ5v8P=ifcE23&hpM?#+&r3']
                ];
                $newRequest = $this->client->createRequest('POST', config('config.ocrDeleteUrl'), $options);
                $postBody = $newRequest->getBody();
                $postBody->setField('file', $file);

                $requests[] = $newRequest;
            }

            Pool::send($this->client, $requests, ['pool_size' => 10]);
        }

        $html = file_get_contents(request()->get('config.ocrGetUrl'));

        $dom = new DomDocument;
        libxml_use_internal_errors(true);
        $dom->loadHTML($html);
        libxml_use_internal_errors(false);

        $elements = $dom->getElementsByTagName('li');

        return view('frontend.ocr', compact('elements'));
    }
    
    public function poll()
    {
        if (request()->ajax()) {
            Artisan::call('ocr:poll');
            Artisan::call('export:poll');
        }
    }


    public function test()
    {
        
    }
}
