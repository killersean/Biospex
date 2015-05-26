@extends('layouts.default')

{{-- Web site Title --}}
@section('title')
@parent
{{ trans('pages.add_data') }}
@stop

{{-- Content --}}
@section('content')
{{ Breadcrumbs::render('projects.inside', $project) }}
        
        <div class="jumbotron">
        <h4>Project:</h4>
        <h2>{{ $project->title }}</h2>
        <p>{{ $project->description_short }}</p>

        </div>

<div class="col-xs-12 col-sm-6 col-md-8 col-sm-offset-3 col-md-offset-2">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{ trans('pages.upload_darwin_file') }}</h3>
            </div>
            <div class="panel-body">
                {{ Form::open(array(
                    'action' => array('projects.upload', $project->id),
                    'method' => 'post',
                    'files' => true,
                    'enctype' => 'multipart/form-data',
                    'id' => 'formAddData',
                    'class' => 'form-horizontal',
                    'role' => 'form'
                )) }}
                <p>{{ trans('pages.add_data_desc', ['link' => link_to_asset('darwin-core-example.zip', "Darwin Core Example")]) }}</p>

                <div class="form-group {{ ($errors->has('darwin')) ? 'has-error' : '' }}">
                    {{ Form::label('darwin', trans('forms.file'), array('id' => 'darwin', 'class' => 'col-sm-2 control-label')) }}
                    <div class="col-sm-10">
                        {{ Form::file('darwin') }}
                    </div>
                    {{ ($errors->has('darwin') ? $errors->first('darwin') : '') }}
                </div>

                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        {{ Form::submit(trans('buttons.upload'), array('class' => 'btn btn-success'))}}
                        {{ Form::button(trans('buttons.cancel'), ['class' => 'btn btn-large btn-primary btn-danger', 'onClick' => "location.href='$cancel'"]) }}
                    </div>
                </div>
                {{ Form::hidden('class', 'SubjectImport') }}
                {{ Form::close()}}
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{ trans('pages.upload_nfn_results') }}</h3>
            </div>
            <div class="panel-body">
                {{ Form::open(array(
                    'action' => array('projects.upload', $project->id),
                    'method' => 'post',
                    'files' => true,
                    'enctype' => 'multipart/form-data',
                    'id' => 'formAddData',
                    'class' => 'form-horizontal',
                    'role' => 'form'
                )) }}
                <p>{{ trans('pages.upload_nfn_desc') }}</p>
                <div class="form-group {{ ($errors->has('nfn')) ? 'has-error' : '' }}">
                    {{ Form::label('nfn', trans('forms.file'), array('id' => 'nfn', 'class' => 'col-sm-2 control-label')) }}
                    <div class="col-sm-10">
                        {{ Form::file('nfn') }}
                    </div>
                    {{ ($errors->has('nfn') ? $errors->first('nfn') : '') }}
                </div>

                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        {{ Form::submit(trans('buttons.upload'), array('class' => 'btn btn-success'))}}
                        {{ Form::button(trans('buttons.cancel'), ['class' => 'btn btn-large btn-primary btn-danger', 'onClick' => "location.href='$cancel'"]) }}
                    </div>
                </div>
                {{ Form::hidden('class', 'NfnTranscriptionImport') }}
                {{ Form::close()}}
            </div>
        </div>
    </div>

@stop