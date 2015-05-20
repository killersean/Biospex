@extends('layouts.default')
{{-- Web site Title --}}
@section('title')
@parent
{{ $project->title }}
@stop

{{-- Content --}}
@section('content')
{{ Breadcrumbs::render('projects.show', $project) }}
        <div class="jumbotron">
        <h4>Project:</h4>
        <h2>{{ $project->title }}</h2>
        <p>{{ $project->description_short }}</p>

        </div>

<div class="panel panel-default">
    <div style="padding: 10px;">
    <p class="eyesright"><strong>@lang('pages.project_url'):</strong> {{ HTML::linkAction('HomeController@project', $project->title, [$project->slug]) }} </p>
    <button title="@lang('buttons.dataTitle')" class="btn btn-success btn-xs" type="button" onClick="location.href='{{ URL::route('projects.import', [$project->id]) }}'"><span class="glyphicon glyphicon-plus-sign"></span> @lang('buttons.data')</button>
        <button title="@lang('buttons.dataViewTitle')" class="btn btn-info btn-xs" type="button" onClick="location.href='{{ URL::route('projects.subjects.show', [$project->id]) }}'"><span class="glyphicon glyphicon-search"></span> @lang('buttons.dataView')</button>
    <button title="@lang('buttons.duplicateTitle')" class="btn btn-success btn-xs" type="button" onClick="location.href='{{ URL::route('projects.duplicate', [$project->id]) }}'"><span class="glyphicon glyphicon-share-alt"></span> @lang('buttons.duplicate')</button>
    <button title="@lang('buttons.editTitle')" class="btn btn-warning btn-xs" type="button" onClick="location.href='{{ URL::route('projects.edit', [$project->id]) }}'"><span class="glyphicon glyphicon-cog"></span> @lang('buttons.edit')</button>
    @if ($isOwner)
    <button title="@lang('buttons.deleteTitle')" class="btn btn-default btn-danger action_confirm btn-xs" href="{{ URL::route('projects.destroy', [$project->id]) }}" data-token="{{ Session::getToken() }}" data-method="delete"><span class="glyphicon glyphicon-remove-circle"></span> @lang('buttons.delete')</button></td>
    @endif
    <button title="@lang('buttons.advertiseTitle')" class="btn btn-success btn-xs" type="button" onClick="location.href='{{ URL::route('projects.advertise', [$project->id]) }}'"><span class="glyphicon glyphicon-globe"></span> @lang('buttons.advertise')</button>
    </div>
</div>

<hr />

<h3>{{ trans('pages.expeditions') }}:</h3>
<button class="btn btn-success" title="@lang('buttons.createTitleE')" onClick="location.href='{{ URL::route('projects.expeditions.create', [$project->id]) }}'"><span class="glyphicon glyphicon-plus"></span> @lang('buttons.create')</button>
<div class="table-responsive">
    <table class="table table-striped table-hover dataTable">
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Subjects</th>
            <th>Incomplete</th>
            <th>Complete</th>
            <th>Percent Complete</th>
            <th>Options</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($project->expeditions as $expedition)
        <tr>
            <td>{{ $expedition->title }}</td>
            <td>{{ $expedition->description }}</td>
            <td>{{ Helper::formatDate($expedition->created_at, 'Y-m-d', $user->timezone); }}</td>
            <td>{{ $expedition->subjectsCount }}</td>
            @if( ! $expedition->actors->isEmpty())
            <td>0</td>
            <td>0</td>
            <td class="nowrap">
                <span class="complete">
                    <span class="complete{{ Helper::roundUpToAnyFive($expedition->actorsCompleted) }}">&nbsp;</span>
                </span> {{ Helper::roundUpToAnyFive($expedition->actorsCompleted) }}%
            </td>
            @else
            <td class="nowrap" colspan="3">{{ trans('expeditions.processing_not_started') }}</td>
            @endif
            <td class="nowrap">
                <button title="@lang('buttons.viewTitle')" class="btn btn-info btn-xs" type="button" onClick="location.href='{{ action('ExpeditionsController@show', [$project->id, $expedition->id]) }}'"><span class="glyphicon glyphicon-eye-open"></span> <!-- @lang('buttons.view') --></button>
                <button title="@lang('buttons.duplicateTitle')" class="btn btn-success btn-xs" type="button" onClick="location.href='{{ action('ExpeditionsController@duplicate', [$project->id, $expedition->id]) }}'"><span class="glyphicon glyphicon-share-alt"></span> <!-- @lang('buttons.duplicate') --></button>
                <button title="@lang('buttons.editTitle')" class="btn btn-warning btn-xs" type="button" onClick="location.href='{{ action('ExpeditionsController@edit', [$project->id, $expedition->id]) }}'"><span class="glyphicon glyphicon-cog"></span> <!-- @lang('buttons.edit') --></button>
                <button title="@lang('buttons.deleteTitle')" class="btn btn-default btn-danger action_confirm btn-xs" href="{{ action('ExpeditionsController@destroy', [$project->id, $expedition->id]) }}" data-token="{{ Session::getToken() }}" data-method="delete"><span class="glyphicon glyphicon-remove-circle"></span> <!-- @lang('buttons.delete') --></button>
                @if ( ! $expedition->downloads->isEmpty())
                <button title="@lang('buttons.downloadTitle')" class="btn btn-success btn-xs" type="button" onClick="location.href='{{ action('DownloadsController@index', [$project->id, $expedition->id]) }}'"><span class="glyphicon glyphicon-floppy-save"></span> <!-- @lang('buttons.download') --></button>
                @endif
            </td>
        </tr>
        @endforeach
        </tbody>
    </table>
</div>
@stop
