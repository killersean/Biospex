@extends('layouts.default')

{{-- Web site Title --}}
@section('title')
@parent
@lang('users.user-suspend')
@stop

{{-- Content --}}
@section('content')
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        {{ Form::open(array('action' => array('UsersController@suspend', $id), 'method' => 'post')) }}
 
            <h2>@lang('users.user-suspend')</h2>

            <div class="form-group {{ ($errors->has('minutes')) ? 'has-error' : '' }}">
                {{ Form::text('minutes', null, array('class' => 'form-control', 'placeholder' => trans('pages.minutes'), 'autofocus')) }}
                {{ ($errors->has('minutes') ? $errors->first('minutes') : '') }}
            </div>    	   

            {{ Form::hidden('id', $id) }}

            {{ Form::submit(trans('buttons.suspend'), array('class' => 'btn btn-primary btn-xs')) }}
            
        {{ Form::close() }}
    </div>
</div>

@stop