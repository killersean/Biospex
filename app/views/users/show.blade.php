@extends('layouts.default')

{{-- Web site Title --}}
@section('title')
@parent
@lang('pages.account-profile')
@stop

{{-- Content --}}
@section('content')
	<h4>@lang('pages.account-profile')</h4>
	
  	<div class="well clearfix">
	    <div class="col-md-8">
		    @if ($user->first_name)
		    	<p><strong>@lang('pages.first-name'):</strong> {{ $user->first_name }} </p>
			@endif
			@if ($user->last_name)
		    	<p><strong>@lang('pages.last-name'):</strong> {{ $user->last_name }} </p>
			@endif
		    <p><strong>@lang('pages.email'):</strong> {{ $user->email }}</p>
		    
		</div>
		<div class="col-md-4">
			<p><em>@lang('pages.account-created'): {{ $user->created_at }}</em></p>
			<p><em>@lang('pages.last-updated'): {{ $user->updated_at }}</em></p>
			<button class="btn btn-primary btn-xs" onClick="location.href='{{ action('UsersController@edit', array($user->id)) }}'">@lang('buttons.edit')</button>
		</div>
	</div>

	<h4>@lang('groups.group-memberships'):</h4>
	<?php $userGroups = $user->getGroups(); ?>
	<div class="well">
	    <ul>
	    	@if (count($userGroups) >= 1)
		    	@foreach ($userGroups as $group)
					<li>{{ $group['name'] }}</li>
				@endforeach
			@else 
				<li>@lang('groups.group-no-memberships').</li>
			@endif
	    </ul>
	</div>

    @if ($viewPermissions)
    <h4>@lang('pages.permissions-user'):</h4>
    <?php $userPermissions = $user->getPermissions(); ?>
    <div class="well">
        <ul>
            @if (count($userPermissions) >= 1)
            @foreach ($userPermissions as $key => $permission)
            <li>{{ str_replace('_', ' ', $key) }} {{ ($permission == 1) ? trans('pages.allowed') : trans('pages.denied') }}</li>
            @endforeach
            @else
            <li>@lang('pages.permissions-no').</li>
            @endif
        </ul>
    </div>
    @endif

@stop
