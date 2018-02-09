@foreach ($trashed as $group)
    @foreach ($group->trashedProjects as $project)
        <tr id="test{{ $project->id }}">
            <td>{{ $project->title }}</td>
            <td><a href="{{ route('webauth.groups.show', [$group->id]) }}">{{ $group->title }}</a></td>
            <td class="fit">
                <button title="@lang('pages.restoreTitle')"
                        class="btn btn-success btn-xs"
                        type="button"
                        onClick="location.href='{{ route('webauth.projects.restore', [$project->id]) }}'">
                    <span class="fa fa-plus fa-lg"></span> @lang('pages.restore') </button>
                @can('delete', $group)
                <button class="btn btn-xs btn-danger" title="@lang('pages.deleteTitle')"
                        data-href="{{ route('webauth.projects.destroy', [$project->id]) }}"
                        data-method="delete"
                        data-toggle="confirmation"
                        data-btn-ok-label="Continue" data-btn-ok-icon="fa fa-share fa-lrg"
                        data-btn-ok-class="btn-success"
                        data-btn-cancel-label="Stop" data-btn-cancel-icon="fa fa-ban fa-lrg"
                        data-btn-cancel-class="btn-danger"
                        data-title="Continue action?" data-content="This will destroy the item">
                    <span class="fa fa-remove fa-lrg"></span> @lang('pages.delete')
                </button>
                @endcan
            </td>
        </tr>
    @endforeach
@endforeach