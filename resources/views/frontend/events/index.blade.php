@extends('frontend.layouts.default')

{{-- Web site Title --}}
@section('title')
    @parent
    @lang('pages.events')
@stop

{{-- Content --}}
@section('content')
    <div class="row top10">
        <div class="col-md-10 col-md-offset-1 text-center">
        <button title="@lang('pages.createTitleEv')" class="btn btn-success btn-lg"
                onClick="location.href='{{ route('webauth.events.create') }}'">
            <i class="fa fa-calendar fa-5x"></i><h2>@lang('pages.create') @lang('pages.event')</h2></button>
        </div>
    </div>
    @include('frontend.events.partials.event-list')
@stop