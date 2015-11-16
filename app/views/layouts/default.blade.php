<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="_token" content="{{ csrf_token() }}"/>
    <title>
        @section('title')
        @show
    </title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" media="screen" />
    @stylesheets()
    @section ('styles')
    @show
</head>

<body class="{{ Route::currentRouteName() }}">

<!-- Navbar -->
<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ URL::route('home') }}"><img src="/assets/biospex.png"
                                                                         alt="{{trans('pages.sitename')}}"/></a>
        </div>
        <div class="collapse navbar-collapse">
            @if (Config::get('config.translate'))
                <ul class="nav navbar-nav">
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"
                                            href="#">{{ trans('pages.translate') }} <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            @foreach (Config::get('supportedLocales') as $key => $lang)
                                <li>
                                    <a href="{{ Local::getLocalizedURL($key) }}">{{ trans('pages.translate-' . $key) }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </li>
                </ul>
            @endif
            {{ $topmenu }}
            <ul class="nav navbar-nav navbar-right">
                @if (Sentry::check())
                    <li {{ (Request::is('users/' . Session::get('userId') . '/edit') ? 'class="active"' : '') }}>
                        <a href="/users/{{ Session::get('userId') }}/edit">{{ Session::get('email') }}</a>
                    </li>
                    <li><a href="{{ URL::route('logout') }}">{{ trans('pages.logout') }}</a></li>
                @else
                    <li
                            {{ (Request::is('login') ? 'class="active"' : '') }}><a
                                href="{{ URL::route('login') }}">{{trans('pages.login')}}</a></li>
                    <li
                            {{ (Request::is('users/create') ? 'class="active"' : '') }}><a
                                href="{{ URL::route('register') }}">{{trans('pages.register')}}</a></li>
                @endif
                <li><a href="{{ URL::route('help') }}">{{ trans('pages.help') }}</a></li>
                <li><a href="{{ URL::route('contact') }}">{{ trans('pages.contact') }}</a></li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
</div>
<!-- ./ navbar -->
@if (Route::currentRouteName() == 'home')
@yield('homepage')
@else
        <!-- Container -->
<div class="container">
    <!-- Notifications -->
    @include('layouts/notifications')
            <!-- ./ notifications -->

    <!-- Content -->
    @yield('content')
            <!-- ./ content -->
</div>
<!-- ./ container -->
@endif

        <!-- Footer -->
@include('layouts/footer')
        <!-- ./ footer -->
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha256-Sk3nkD6mLTMOF0EOpNtsIry+s1CsaqQC1rVLTAy+0yc= sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
@javascripts()
@section ('javascript')
@show
<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</body>
</html>
