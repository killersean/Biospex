@extends('frontend.layouts.default')

{{-- Web site Title --}}
@section('title')
    @parent
    @lang('pages.group')
@stop

{{-- Content --}}
@section('content')
    {!! Breadcrumbs::render('webauth.groups.show', $group) !!}
    <div class="jumbotron">
        <h3>{{ $group->title }}</h3>
    </div>

    <div class="panel panel-primary">
        <div style="padding: 10px;">
            @can('update', $group)
                <button title="@lang('pages.editTitle')" class="btn btn-warning btn-sm"
                        onClick="location.href='{{ route('webauth.groups.edit', array($group->id)) }}'"><span
                            class="fa fa-cog fa-lrg"></span> @lang('pages.edit')</button>
                <button title="@lang('pages.inviteTitle')" class="btn btn-default btn-reverse btn-sm" type="button"
                        onClick="location.href='{{ route('webauth.invites.index', [$group->id]) }}'"><span
                            class="fa fa-users fa-lrg"></span> @lang('pages.invite')</button>
            @endcan
            @can('delete', $group)
                <button class="btn btn-sm btn-danger" title="@lang('pages.deleteTitle')"
                        data-href="{{ route('webauth.groups.delete', array($group->id)) }}"
                        data-method="delete"
                        data-toggle="confirmation"
                        data-btn-ok-label="Continue" data-btn-ok-icon="fa fa-share fa-lrg"
                        data-btn-ok-class="btn-success"
                        data-btn-cancel-label="Stop" data-btn-cancel-icon="fa fa-ban fa-lrg"
                        data-btn-cancel-class="btn-danger"
                        data-title="Continue action?" data-content="This will delete the item">
                    <span class="fa fa-remove fa-lrg"></span> @lang('pages.delete')
                </button>
            @endcan
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-striped table-hover dataTable">
            <thead>
            <tr>
                <th>@lang('pages.group') @lang('pages.owner)</th>
                <th>{{ trans('pages.users') }}</th>
                <th>{{ trans('pages.projects') }}</th>
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
                            <li>{!! link_to_route('webauth.projects.show', $project->title, $project->id) !!}</li>
                        @endforeach
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
@stop
