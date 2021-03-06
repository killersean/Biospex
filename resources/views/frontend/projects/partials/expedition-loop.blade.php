<tr>
    <td>{{ $expedition->title }}</td>
    <td>{{ $expedition->description }}</td>
    <td>{{ DateHelper::formatDate($expedition->created_at, 'Y-m-d', $user->profile->timezone) }}</td>
    <td>{{ $expedition->stat->local_subject_count }}</td>
    <td>{{ $expedition->stat->subject_count }}</td>
    @if( ! $expedition->actors->isEmpty())
        <td>{{ $expedition->stat->transcriptions_total }}</td>
        <td>{{ $expedition->stat->transcriptions_completed }}</td>
        <td class="nowrap">
                    <span class="complete">
                        <span class="complete{{ GeneralHelper::roundUpToAnyFive($expedition->stat->percent_completed) }}">&nbsp;</span>
                    </span> {{ $expedition->stat->percent_completed }}%
        </td>
    @else
        <td class="nowrap" colspan="3">{{ trans('expeditions.processing_not_started') }}</td>
    @endif
    <td class="fit">
        <button title="@lang('buttons.viewTitle')" class="btn btn-primary btn-xs" type="button"
                onClick="location.href='{{ route('web.expeditions.show', [$project->id, $expedition->id]) }}'">
            <span class="fa fa-eye fa-lrg"></span> <!-- @lang('buttons.view') --></button>
        <button title="@lang('buttons.duplicateTitle')" class="btn btn-success btn-xs"
                type="button"
                onClick="location.href='{{ route('web.expeditions.duplicate', [$project->id, $expedition->id]) }}'">
            <span class="fa fa-copy fa-lrg"></span> <!-- @lang('buttons.duplicate') --></button>
        <button title="@lang('buttons.editTitle')" class="btn btn-warning btn-xs" type="button"
                onClick="location.href='{{ route('web.expeditions.edit', [$project->id, $expedition->id]) }}'">
            <span class="fa fa-cog fa-lrg"></span> <!-- @lang('buttons.edit') --></button>
        @can('isOwner', $project->group)
        <button class="btn btn-xs btn-danger" title="@lang('buttons.deleteTitle')"
                data-href="{{ route('web.expeditions.delete', [$project->id, $expedition->id]) }}"
                data-method="delete"
                data-toggle="confirmation"
                data-btn-ok-label="Continue" data-btn-ok-icon="fa fa-share fa-lrg"
                data-btn-ok-class="btn-success"
                data-btn-cancel-label="Stop" data-btn-cancel-icon="fa fa-ban fa-lrg"
                data-btn-cancel-class="btn-danger"
                data-title="Continue action?" data-content="This will trash the item">
            <span class="fa fa-remove fa-lrg"></span> <!-- @lang('buttons.delete') -->
        </button>
        @endcan


        @if ( ! $expedition->downloads->isEmpty())
            <button title="@lang('buttons.downloadTitle')" class="btn btn-success btn-xs"
                    type="button"
                    onClick="location.href='{{ route('web.downloads.index', [$project->id, $expedition->id]) }}'">
                <span class="fa fa-download fa-lrg"></span> <!-- @lang('buttons.download') -->
            </button>
        @endif
    </td>
</tr>