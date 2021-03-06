<div class="jumbotron">
    <h3>{{ $project->title }}</h3>
    <p>{{ $project->description_short }}</p>
</div>

<div class="panel panel-default">
    <div class="panel-body">
        <div class="row">
            <div class="col-md-4">
                <button title="@lang('buttons.dataTitle')" class="btn btn-inverse btn-sm" type="button"
                        onClick="location.href='{{ route('web.imports.import', [$project->id]) }}'"><span
                            class="fa fa-plus fa-lrg"></span> @lang('buttons.data')</button>
                <button title="@lang('buttons.dataViewTitle')" class="btn btn-info btn-sm" type="button"
                        onClick="location.href='{{ route('projects.get.explore', [$project->id]) }}'"><span
                            class="fa fa-search fa-lrg"></span> @lang('buttons.dataView')</button>
                <button title="@lang('buttons.duplicateTitle')" class="btn btn-success btn-sm" type="button"
                        onClick="location.href='{{ route('web.projects.duplicate', [$project->id]) }}'"><span
                            class="fa fa-copy fa-lrg"></span> @lang('buttons.duplicate')</button>
                <button title="@lang('buttons.editTitle')" class="btn btn-warning btn-sm" type="button"
                        onClick="location.href='{{ route('web.projects.edit', [$project->id]) }}'"><span
                            class="fa fa-cog fa-lrg"></span> @lang('buttons.edit')</button>
                @can('delete', $project)
                    <button class="btn btn-sm btn-danger" title="@lang('buttons.deleteTitle')"
                            data-href="{{ route('web.projects.delete', [$project->id]) }}"
                            data-method="delete"
                            data-toggle="confirmation"
                            data-btn-ok-label="Continue" data-btn-ok-icon="fa fa-share fa-lrg"
                            data-btn-ok-class="btn-success"
                            data-btn-cancel-label="Stop" data-btn-cancel-icon="fa fa-ban fa-lrg"
                            data-btn-cancel-class="btn-danger"
                            data-title="Continue action?" data-content="This will delete the item">
                        <span class="fa fa-remove fa-lrg"></span> @lang('buttons.delete')
                    </button>
                @endcan
            </div>

            <div class="col-md-2">
                <button title="@lang('buttons.ocrTitle')" class="btn btn-success btn-sm" type="button"
                        {{ count($project->ocrQueue) === 0 ? '' : 'disabled' }}
                        onClick="location.href='{{ route('web.projects.ocr', [$project->id]) }}'">
                    <span class="fa fa-repeat fa-lrg"></span>
                    {{ count($project->ocrQueue) === 0 ? trans('buttons.ocr') : trans('buttons.ocrDisabled') }}
                </button>
            </div>
            <div class="col-md-6">
                <p class="eyesright"><strong>@lang('pages.project_url')
                        :</strong> {!! link_to_route('home.get.project', $project->title, [$project->slug]) !!}
                </p>
                <button title="@lang('buttons.advertiseTitle')" class="btn btn-success btn-sm" type="button"
                        onClick="location.href='{{ route('web.advertises.index', [$project->id]) }}'"><span
                            class="fa fa-globe fa-lrg"></span> @lang('buttons.advertise')</button>
                @can('isOwner', $project->group)
                    <button title="@lang('buttons.projectStatsTitle')" class="btn btn-success btn-sm"
                            type="button"
                            onClick="location.href='{{ route('web.statistics.index', [$project->id]) }}'">
                        <span class="fa fa-bar-chart fa-lrg"></span> @lang('buttons.projectStats')
                    </button>
                @endcan
            </div>
        </div>
    </div>
</div>

<h3>{{ trans('pages.expeditions') }}
    <button class="btn btn-success" title="@lang('buttons.createTitleE')"
            onClick="location.href='{{ URL::route('web.expeditions.create', [$project->id]) }}'"><span
                class="fa fa-plus fa-lrg"></span> @lang('buttons.create')</button>
</h3>