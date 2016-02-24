<?php
/*************************************************************************
 * Generated via "php artisan localization:missing" at 2015/06/05 14:49:01
 *************************************************************************/

return [
    //==================================== Translations ====================================//
    'account'                       => 'Account',
    'activate_message_html'         => 'To activate your account',
    'activate_message_text'         => 'Or point your browser to this address',
    'contact'                       => 'Contact Form',
    'contact_email'                 => 'Email',
    'contact_first'                 => 'First Name',
    'contact_last'                  => 'Last Name',
    'contact_message'               => 'Message',
    'contact_subject'               => 'Biospex Contact Form',
    'error'                         => 'Biospex error report.',
    'error_core_file_missing'       => 'Could not determine core file from meta file.',
    'error_core_type'               => 'Error querying core type from meta file.',
    'error_create_dir'              => 'Unable to create directory: :directory',
    'error_csv_core_delimiter'      => 'CSV core delimiter is empty.',
    'error_csv_ext_delimiter'       => 'CSV extension delimiter is empty.',
    'error_csv_row_count'           => 'Header column count does not match row count. :headers headers / :rows rows',
    'error_import'                  => 'An error has occurred during import.',
    'error_loading_xml'             => 'error_loading_xml',
    'error_message'                 => 'Error Message:',
    'error_ocr_curl'                => 'Ocr Queue error sending file for record :id. Message: :message',
    'error_ocr_header'              => 'Ocr header response reported error while processing file.',
    'error_ocr_request'             => 'Ocr failed when requesting file for record :id.',
    'error_ocr_stuck_queue'         => 'The queue job with id of :id has been stuck in the queue.',
    'error_process'                 => 'Expedition id :id could not be found during processing.',
    'error_save_file'               => 'Unable to save file: :directory',
    'error_write_dir'               => 'Unable to make directory writable: :directory',
    'expedition_complete'           => 'Biospex process completed: :expedition',
    'failed_job_subject'            => 'Failed Job Report.',
    'group_invite_message'          => 'You have been invited to join the Biospex group :group. Please :link to register using this email address.',
    'group_invite_subject'          => 'Bisopex Group Invite',
    'import_dup_rej_message'        => 'If duplicates or rejects exist, you will find the information in an attached csv file.',
    'import_ocr_message'            => 'OCR processing may take longer, and you will receive an email when it is complete.',
    'import_subject_complete'       => 'The subject import for :project has been completed.',
    'import_subject_subject'        => 'Subject Import Completed',
    'import_transcription_complete' => 'The transcription import for :project has been completed.',
    'import_transcription_subject'  => 'Transcription Import Completed',
    'ocr_complete'                  => 'OCR Process Completed',
    'ocr_complete_message'          => 'The OCR processing of your data is complete. If there were any errors in processing images, an attached file will be present.',
    'click_reset_password'          => 'Click here to reset your password',

    'signature'                     => "The Biospex Team",
    'thank_you'                     => 'Thank you',
    'welcome'                       => 'Welcome',
    'error_rowtype_mismatch'        => 'Row Type mismatch in reading meta xml file. :file, :row_type, :type_file',
    'error_empty_image_uri'         => 'Image uri array empty for Expedition :id during Notes from Nature export',
    //================================== Obsolete strings ==================================//
    'error_build_image_dir'         => 'No images were retrieved during build for Expedition Id :id.',
    'error_csv_build_header'        => 'Undefined index for :key => :qualified when building header for csv import.',
    'error_import_process'          => "Unable to process import.<br />Id: :id<br />Message: :message<br />Trace: :trace",
    'error_zip_download'            => 'Unable to complete zip download',
    'error_zip_type'                => 'Wrong file type for zip download',
    'error_load_xml'                => 'Unable to load dom document for meta id :id',
    'error_move_file'               => 'Unable to move file: :directory',
    'error_ocr_queue'               => 'Process error - :id, :message, :url.',
    'error_workflow_manager'        => 'An error occurred while processing :class using workflow id :id. Message - :error',
    'expedition_complete_message'   => "The expedition :expedition has been processed successfully. If a download file was created during this process, you may access the link on the Expedition view page. If there were errors, an attachment will be included in this email.",
    'failed_job_message'            => "Job queue :id has failed.<br />Job Data: :jobData ",
    'missing_images'                => 'The below images were unable to be found. Missing image ids were missing the url column in the csv file. Missing image urls were images we were unable to retrieve or convert.',
    'missing_images_subject'        => 'Missing image information',
    'missing_img_ids'               => 'Missing Image Ids:',
    'missing_img_urls'              => 'Missing Image Urls',
    'subject'                       => 'Subject',
    'subjects'                      => 'Subjects',
];
