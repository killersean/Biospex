<?php

return array (
  'accepted' => 'The :attribute must be accepted.',
  'active_url' => 'The :attribute is not a valid URL.',
  'after' => 'The :attribute must be a date after :date.',
  'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
  'alpha' => 'The :attribute may only contain letters.',
  'alpha_dash' => 'The :attribute may only contain letters, numbers, and dashes.',
  'alpha_num' => 'The :attribute may only contain letters and numbers.',
  'array' => 'The :attribute must be an array.',
  'before' => 'The :attribute must be a date before :date.',
  'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
  'between' =>
  array (
    'numeric' => 'The :attribute must be between :min and :max.',
    'file' => 'The :attribute must be between :min and :max kilobytes.',
    'string' => 'The :attribute must be between :min and :max characters.',
    'array' => 'The :attribute must have between :min and :max items.',
  ),
  'boolean' => 'The :attribute field must be true or false.',
  'confirmed' => 'The :attribute confirmation does not match.',
  'custom' =>
  array (
    'oldPassword' =>
    array (
      'required' => 'You must enter your old password.',
      'min' => 'Your old password must be at least 6 characters long.',
    ),
    'newPassword' =>
    array (
      'required' => 'You must enter a new password.',
      'min' => 'Your new password must be at least 6 characters long.',
    ),
    'newPassword_confirmation' =>
    array (
      'required' => 'You must confirm your new password.',
    ),
    'minutes' =>
    array (
      'numeric' => 'Minutes must be a number',
      'required' => 'You must specify suspension length in minutes',
    ),
    'registeruser' =>
    array (
      'honeypot' => 'Form required to be submitted on time.',
    ),
    'registertime' =>
    array (
      'honeytime' => 'Too much time has elapse. Please refresh form.',
    ),
    'group' =>
    array (
      'required_without' => 'The :attribute field is required.',
    ),
    'actors' =>
    array (
      '*' =>
      array (
        'id' =>
        array (
          'required' => 'Actors are required for workflows.',
        ),
      ),
    ),
  ),
  'date' => 'The :attribute is not a valid date.',
  'date_format' => 'The :attribute does not match the format :format.',
  'different' => 'The :attribute and :other must be different.',
  'digits' => 'The :attribute must be :digits digits.',
  'digits_between' => 'The :attribute must be between :min and :max digits.',
  'dimensions' => 'The :attribute has invalid image dimensions.',
  'distinct' => 'The :attribute field has a duplicate value.',
  'email' => 'The :attribute must be a valid email address.',
  'exists' => 'The selected :attribute is invalid.',
  'file' => 'The :attribute must be a file.',
  'filled' => 'The :attribute field must have a value.',
  'image' => 'The :attribute must be an image.',
  'in' => 'The selected :attribute is invalid.',
  'in_array' => 'The :attribute field does not exist in :other.',
  'integer' => 'The :attribute must be an integer.',
  'ip' => 'The :attribute must be a valid IP address.',
  'ipv4' => 'The :attribute must be a valid IPv4 address.',
  'ipv6' => 'The :attribute must be a valid IPv6 address.',
  'json' => 'The :attribute must be a valid JSON string.',
  'max' =>
  array (
    'numeric' => 'The :attribute may not be greater than :max.',
    'file' => 'The :attribute may not be greater than :max kilobytes.',
    'string' => 'The :attribute may not be greater than :max characters.',
    'array' => 'The :attribute may not have more than :max items.',
  ),
  'mimes' => 'The :attribute must be a file of type: :values.',
  'mimetypes' => 'The :attribute must be a file of type: :values.',
  'min' =>
  array (
    'numeric' => 'The :attribute must be at least :min.',
    'file' => 'The :attribute must be at least :min kilobytes.',
    'string' => 'The :attribute must be at least :min characters.',
    'array' => 'The :attribute must have at least :min items.',
  ),
  'not_in' => 'The selected :attribute is invalid.',
  'numeric' => 'The :attribute must be a number.',
  'present' => 'The :attribute field must be present.',
  'regex' => 'The :attribute format is invalid.',
  'required' => 'The :attribute field is required.',
  'required_if' => 'The :attribute field is required when :other is :value.',
  'required_unless' => 'The :attribute field is required unless :other is in :values.',
  'required_with' => 'The :attribute field is required when :values is present.',
  'required_with_all' => 'The :attribute field is required when :values is present.',
  'required_without' => 'The :attribute field is required when :values is not present.',
  'required_without_all' => 'The :attribute field is required when none of :values are present.',
  'same' => 'The :attribute and :other must match.',
  'size' =>
  array (
    'numeric' => 'The :attribute must be :size.',
    'file' => 'The :attribute must be :size kilobytes.',
    'string' => 'The :attribute must be :size characters.',
    'array' => 'The :attribute must contain :size items.',
  ),
  'string' => 'The :attribute must be a string.',
  'timezone' => 'The :attribute must be a valid zone.',
  'unique' => 'The :attribute has already been taken.',
  'uploaded' => 'The :attribute failed to upload.',
  'url' => 'The :attribute format is invalid.',
);
