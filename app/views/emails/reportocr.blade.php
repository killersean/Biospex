<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
</head>
<body>
<p>
<blockquote>
    {{{ $mainMessage }}}<br /><br />
    {{{ trans('projects.project') }}}: {{{ $projectTitle }}}<br />
</blockquote>
</p>
<p>{{ trans('emails.thank_you') }}, <br />
    ~{{ trans('emails.signature') }}</p>
</body>
</html>