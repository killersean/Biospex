@component('mail::message')
# Notes From Nature Export Completed

{!! $message !!}

Thank you,<br>
{{ config('app.name') }}
@endcomponent
