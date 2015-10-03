@extends('front.layouts.default')
{{-- Web site Title --}}
@section('title')
    @parent
    {{ $project->title }}
@stop

{{-- Content --}}
@section('content')
{!! Breadcrumbs::render('projects.inside', $project) !!}
<div class="jumbotron">
    <h4>@lang('projects.project'):</h4>
    <h2>{{ $project->title }}</h2>
    <p>@lang('pages.advertise_title')</p>
    <button title="@lang('buttons.downloadTitle')" class="btn btn-success btn-sm" type="button" onClick="location.href='{{ route('projects.advertiseDownload', [$project->id]) }}'"><span class="fa fa-download fa-lrg"></span> @lang('buttons.download') </button>
</div>
<div class="col-xs-12">
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">@lang('pages.advertise_fields')</h3>
        </div>
        <div class="panel-body">
            <div class="table-responsive">
                <table class="table table-striped table-hover dataTable">
                    <thead>
                    <tr>
                        <th>@lang('pages.field')</th>
                        <th>@lang('pages.value')</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach (json_decode($project->advertise) as $field => $value)
                        <tr>
                            <td>{{ $field }}</td>
                            <td>{{ $value }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
