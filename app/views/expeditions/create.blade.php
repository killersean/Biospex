@extends('layouts.default')

{{-- Web site Title --}}
@section('title')
@parent
{{ trans('pages.create') }} {{ trans('expeditions.expedition') }}
@stop

{{-- Content --}}
@section('content')
 
<h2>{{ $project->title }}</h2>
<h4>{{ trans('pages.create') }} {{ trans('expeditions.expedition') }}</h4>
<div class="well">
    {{ Form::open(array(
    'action' => array('ExpeditionsController@update', $project->id),
    'method' => 'post',
    'class' => 'form-horizontal',
    'role' => 'form'
    )) }}

    @include('partials.expedition-fields')

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            {{ Form::hidden('project_id', $project->id) }}
			{{ Form::submit(trans('buttons.create'), array('class' => 'btn btn-primary'))}}
			{{ Form::button(trans('buttons.cancel'), ['class' => 'btn btn-large btn-primary btn-danger', 'onClick' => "location.href='$cancel'"]) }}
        </div>
    </div>
    {{ Form::close()}}
</div>

@stop