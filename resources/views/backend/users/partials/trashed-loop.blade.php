@foreach($trashed as $user)
    <tr id="{{ $user->id }}">
        <td>{!! $user->id !!}</td>
        <td>{!! $user->profile->full_name !!}</td>
        <td>{!! $user->email !!}</td>
        <td>{!! $user->activated === 1 ? 'Yes' : 'No' !!}</td>
        <td>{!! $user->profile->timezone !!}</td>
        <td>{!! $user->created_at !!}</td>
        <td>
        <td>
            <div class="btn-toolbar">
                <button title="@lang('buttons.restoreTitle')"
                        class="btn btn-success btn-xs"
                        type="button"
                        onClick="location.href='{{ route('admin.users.restore', [$user->id]) }}'">
                    <span class="fa fa-plus fa-lg"></span><!-- @lang('buttons.view') --></button>

                <button title="@lang('buttons.deleteTitle')"
                        class="btn btn-danger btn-xs" type="button"
                        data-toggle="confirmation" data-placement="left"
                        data-href="{{ route('admin.users.destroy', [$user->id]) }}"
                        data-method="delete">
                    <span class="fa fa-remove fa-sm"></span> <!-- @lang('buttons.delete') --></button>
            </div>
        </td>
    </tr>
@endforeach