@extends('frontend.layouts.default')

{{-- Web site Title --}}
@section('title')
@parent
{{ trans('pages.edit') }} {{ trans('expeditions.expedition') }}
@stop

{{-- Content --}}
@section('content')
    {!! Breadcrumbs::render('projects.expeditions.get.show.title', $expedition, trans('pages.edit') . ' ' . trans('expeditions.expedition')) !!}
    <div class="col-xs-12">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">{{ trans('pages.create') }} {{ trans('expeditions.expedition') }}</h3>
            </div>
            <div class="panel-body">
                {!! Form::open([
                'route' => ['projects.expeditions.put.update', $expedition->project->id, $expedition->id],
                'method' => 'put',
                'class' => 'form-horizontal',
                'role' => 'form'
                ]) !!}

                <div class="form-group required {{ ($errors->has('title')) ? 'has-error' : '' }}" for="title">
                    {!! Form::label('title', trans('forms.title'), ['class' => 'col-sm-2 control-label']) !!}
                    <div class="col-sm-10">
                        {!! Form::text('title', $expedition->title, ['class' => 'form-control', 'placeholder' => trans('forms.title')]) !!}
                    </div>
                    {{ ($errors->has('title') ? $errors->first('title') : '') }}
                </div>

                <div class="form-group required {{ ($errors->has('description')) ? 'has-error' : '' }}">
                    {!! Form::label('description', trans('forms.description'), ['class' => 'col-sm-2 control-label']) !!}
                    <div class="col-sm-10">
                        {!! Form::textarea('description', $expedition->description, ['class' => 'form-control', 'placeholder' => trans('forms.description')]) !!}
                    </div>
                    {{ ($errors->has('description') ? $errors->first('description') : '') }}
                </div>

                <div class="form-group required {{ ($errors->has('keywords')) ? 'has-error' : '' }}">
                    {!! Form::label('keywords', trans('forms.keywords'), ['class' => 'col-sm-2 control-label']) !!}
                    <div class="col-sm-10">
                        {!! Form::text('keywords', $expedition->keywords, ['class' => 'form-control', 'placeholder' => trans('forms.keywords')]) !!}
                    </div>
                    {{ ($errors->has('keywords') ? $errors->first('keywords') : '') }}
                </div>

                <h4>{{ trans_choice('pages.subjects_assigned', 1) }}: <span id="subjectCount">{{ $expedition->subjectsCount }}</span></h4>
                <div class="table-responsive" id="jqtable">
                    @if($showCb)
                        <input type="hidden" id="showCb" value="0">
                    @else
                        <input type="hidden" id="showCb" value="1">
                    @endif
                    <input type="hidden" id="url" value="{{ URL::route('projects.grids.expeditions.edit', [$expedition->project->id, $expedition->id]) }}">
                    <input type="hidden" id="projectId" value="{{ $expedition->project->id }}">
                    <input type="hidden" id="expeditionId" value="{{ $expedition->id }}">
                    <input type="hidden" id="subjectIds" name="subjectIds" value="{{ $subjects }}">
                    <table class="table table-bordered jgrid" id="jqGridExpedition"></table>
                    <div id="pager"></div>
                    <br />
                    <button id="savestate" class="btn btn-default">Save Grid State</button>
                    <button id="loadstate" class="btn btn-default">Load Grid State</button>
                </div>
                <br />
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        {!! Form::hidden('project_id', $expedition->project->id) !!}
                        {!! Form::hidden('id', $expedition->id) !!}
                        {!! Form::submit(trans('buttons.update'), ['class' => 'btn btn-primary']) !!}
                        {!! link_to(URL::previous(), trans('buttons.cancel'), ['class' => 'btn btn-large btn-primary btn-danger']) !!}
                    </div>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
    @include('frontend/layouts/jqgrid')

@stop