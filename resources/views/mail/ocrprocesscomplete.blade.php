@component('mail::message')
## {{ $title }}

@lang('messages.ocr_complete_message')<br>

Thank you,<br>
{{ config('app.name') }}
@endcomponent