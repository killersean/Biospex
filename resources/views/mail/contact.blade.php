@component('mail::message')
# @lang('messages.contact')

**@lang('messages.contact_name'):** {{ $contact['first_name'] }} {{ $contact['last_name'] }}
**@lang('messages.contact_email'):** {{ $contact['email'] }}
**@lang('messages.contact_message'):**
{{ $contact['message'] }}

Thank you,<br>
{{ config('app.name') }}
@endcomponent