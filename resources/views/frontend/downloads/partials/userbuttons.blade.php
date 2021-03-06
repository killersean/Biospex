@if ($download->type != 'export')
    @can('isOwner', $expedition->project->group)
        <button title="@lang('buttons.downloadTitle')"
                class="btn btn-success btn-xs"
                type="button"
                onClick="location.href='{{ route('projects.expeditions.downloads.get.show', [$expedition->project->id, $expedition->id, $download->id]) }}'">
            <span class="fa fa-download"></span> @lang('buttons.download')
        </button>
        @if ($download->type === 'summary')
            <button title="@lang('buttons.summaryTitle')" class="btn btn-primary btn-xs" type="button"
                    onClick="window.open('{{ route('web.downloads.summary', [$expedition->project->id, $expedition->id]) }}', '_blank')">
                <span class="fa fa-eye fa-lrg"></span> @lang('buttons.summary')
            </button>
        @endif
    @endcan
@else
    <button title="@lang('buttons.downloadTitle')"
            class="btn btn-success btn-xs"
            type="button"
            onClick="location.href='{{ route('projects.expeditions.downloads.get.show', [$expedition->project->id, $expedition->id, $download->id]) }}'">
        <span class="fa fa-download"></span> @lang('buttons.download')
    </button>
    @if ($download->type === 'export')
        <button title="@lang('buttons.regenerateDownload')"
                class="btn btn-success btn-xs" type="button"
                onClick="location.href='{{ route('web.downloads.regenerate', [$expedition->project->id, $expedition->id]) }}'">
            <span class="fa fa-refresh"></span> @lang('buttons.regenerateDownload')
        </button>
    @endif
@endif