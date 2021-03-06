@extends('frontend.layouts.default')

{{-- Web site Title --}}
@section('title')
    @parent
    @lang('groups.group_view')
@stop

{{-- Content --}}
@section('content')
    {!! Breadcrumbs::render('web.groups.show', $group) !!}
    <div class="jumbotron">
        <h3>{{ $group->title }}</h3>
    </div>

    <div class="panel panel-primary">
        <div style="padding: 10px;">
            @can('update', $group)
                <button title="@lang('buttons.editTitle')" class="btn btn-warning btn-sm"
                        onClick="location.href='{{ route('web.groups.edit', array($group->id)) }}'"><span
                            class="fa fa-cog fa-lrg"></span> @lang('buttons.edit')</button>
                <button title="@lang('buttons.inviteTitle')" class="btn btn-default btn-reverse btn-sm" type="button"
                        onClick="location.href='{{ route('web.invites.index', [$group->id]) }}'"><span
                            class="fa fa-users fa-lrg"></span> @lang('buttons.invite')</button>
            @endcan
            @can('delete', $group)
                <button class="btn btn-sm btn-danger" title="@lang('buttons.deleteTitle')"
                        data-href="{{ route('web.groups.delete', array($group->id)) }}"
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
    </div>

    <div class="table-responsive">
        <table class="table table-striped table-hover dataTable">
            <thead>
            <tr>
                <th>{{ trans('groups.group_admin') }}</th>
                <th>{{ trans('users.users') }}</th>
                <th>{{ trans('projects.projects') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{!! Html::mailto($group->owner->email, $group->owner->profile->first_name.' '.$group->owner->profile->last_name) !!}</td>
                <td>
                    <ul>
                        @foreach ($group->users as $user)
                            @if (null === $user->profile->first_name && null === $user->profile->last_name)
                                <li>{!! Html::mailto($user->email, $user->email) !!}</li>
                            @else
                                <li>{!! Html::mailto($user->email, $user->profile->fullNam) !!}</li>
                            @endif
                        @endforeach
                    </ul>
                </td>
                <td>
                    <ul>
                        @foreach ($group->projects as $project)
                            <li>{!! link_to_route('web.projects.show', $project->title, $project->id) !!}</li>
                        @endforeach
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
@stop
