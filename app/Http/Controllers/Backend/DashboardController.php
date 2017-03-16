<?php namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\User;

class DashboardController extends Controller
{
    /**
     * Show the application dashboard.
     * 
     * @param Request $request
     * @param User $repo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, User $repo)
    {
        $user = $repo->with(['profile'])->find($request->user()->id);
        dd($user);

        return view('backend.index', compact('user'));
    }
}