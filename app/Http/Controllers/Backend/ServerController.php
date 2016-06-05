<?php

namespace App\Http\Controllers\Backend;

use App\Repositories\Contracts\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ServerController extends Controller
{

    /**
     * Display listing of resource.
     * 
     * @param Request $request
     * @param User $repo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, User $repo)
    {
        $user = $repo->with(['profile'])->find($request->user()->id);

        return view('backend.server.index', compact('user'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param Request $request
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     * 
     * @param Request $request
     * @param User $repo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Request $request, User $repo)
    {
        $user = $repo->with(['profile'])->find($request->user()->id);

        ob_start () ;
        phpinfo () ;
        $page = ob_get_contents () ;
        ob_end_clean () ;
        preg_match('/<body[^>]*>(.*?)<\/body>/is', $page, $matches);
        $phpInfo = $matches[1];


        return view('backend.server.show', compact('user', 'phpInfo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        //
    }
}
