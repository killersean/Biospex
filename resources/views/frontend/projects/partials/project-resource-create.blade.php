<div class="entry col-sm-12 project-resource">
    <div class="form-group col-sm-3">
        {!! Form::label('', trans('Type'), ['class' => 'control-label']) !!}
        <div class="input-group">
            <span class="input-group-btn">
                {!! Form::button('<i class="fa fa-plus fa-lrg"></i> ', ['type' => 'button', 'class' => 'btn btn-success btn-add']) !!}
            </span>
            {!! Form::select('resource[0][type]', $resourcesSelect, null, ['class' => 'form-control']) !!}
        </div>
    </div>
    <div class="form-group col-sm-3">
        {!! Form::label('', trans('Name/URL'), ['class' => 'control-label']) !!}
        {!! Form::text('resource[0][name]', null, ['class' => 'form-control', 'placeholder' => trans('forms.project_resources_name')]) !!}
    </div>
    <div class="form-group col-sm-4">
        {!! Form::label('', trans('Description'), ['class' => 'control-label']) !!}
        {!! Form::text('resource[0][description]', null, ['class' => 'form-control', 'placeholder' => trans('forms.project_resources_description')]) !!}
    </div>
    <div class="form-group col-sm-2">
        {!! Form::label('', trans('File'), ['class' => 'control-label']) !!}
        {!! Form::file('resource[0][upload]') !!}
    </div>
</div>