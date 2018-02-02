<?php

return array(
    'ocr_file_error'            => 'The OCR json file returned and error from the OCR server.<br />Project: :title<br />ID:  :id<br />The Biospex Administration has been notified and will investigate the issue. Please do not try to resubmit or perform other functions on this project.<br />Message: :message',
    'ocr_send_error'            => 'An error occurred while submitting json file to the OCR server.<br />Project: :title<br />ID:  :id<br />The Biospex Administration has been notified and will investigate the issue. Please do not try to resubmit or perform other functions on this project.<br />Message: :message',
    'nfn_export_error'          => 'An error occurred while exporting.<br />Expedition: :title<br />ID:  :id<br />The Biospex Administration has been notified and will investigate the issue. Please do not attempt to restart export or perform other functions on this project.<br />Message: :message',
    'nfn_classifications_error' => 'An error occurred while processing the NfN classifications.<br />Project: :title<br />ID:  :id<br />The Biospex Administration has been notified and will investigate the issue. Please do not attempt to restart or perform other functions on this project.<br />Message: :message',
    'missing_nfnworkflow'       => 'An error occurred while processing the NfN classifications.<br />Expedition: :title<br />Message: Missing required Notes From Nature Workflow ID and cannot process classifications. Please edit the Expedition and enter the ID in the appropriate form field.',
    'create_dir'                => 'Unable to create directory: :directory',
    'write_dir'                 => 'Unable to make directory writable: :directory',
    'save_file'                 => 'An error occurred while attempting to save file: :file',
    'import_process_title'      => 'An error occurred while importing the Darwin Core Archive.',
    'import_process'            => 'Project: :title<br>ID:  :id<br>Message: :message<br><br>The Biospex Administration has been notified and will investigate the issue. Please do not attempt to restart or perform other functions on this project.',
    'zip_download'              => 'Unable to complete zip download for Darwin Core Archive.',
    'zip_type'                  => 'Wrong file type for zip download',
    'rowtype_mismatch'          => 'Row Type mismatch in reading meta xml file. :file, :row_type, :type_file',
    'csv_build_header'          => 'Undefined index for :key => :qualified when building header for csv import.',
    'ocr_queue_check_title'     => 'There was an error while processing the following queued OCR.',
    'ocr_queue_check'           => 'Project ":title"<br />ID: :id<br />Message: :message<br /><br />',
    'failed_job_message'        => 'Job queue :id has failed.<br />Job Data: :jobData ',
    'core_node_missing'         => 'Core node missing from xml meta file.',
    'extension_node_missing'    => 'Extension node missing from xml meta file',
    'extension_file'            => 'Could not determine extension file from meta file - :file.',
    'csv_core_delimiter'        => 'CSV core delimiter is empty.',
    'csv_ext_delimiter'         => 'CSV extension delimiter is empty.',
    'csv_row_count'             => 'Header column count does not match row count. :headers headers / :rows rows',
    'loading_xml'               => 'An error occurred when reading the input XML',
    'ocr_stuck_queue'           => 'The queue job with id of :id has been stuck in the queue.',
    'workflow_actor'            => 'An error occurred while processing the Actor :class for Expedition ":title".<br />Message: :message<br /><br />The Administration has been notified. Please do not take any further actions until contacted.',
    'http_status_code'          => 'Http call to :url returned status code :code',
    'missing_identifier'        => 'The Darwin Core Archive is missing the required identifier column inside the csv file.<br />Accepted identifiers: :identifiers',
    'missing_meta_extension'    => 'Unable to determine meta file extension during Darwin Core Archive import. This is typically due to missing required DWC row types. File: :file',
    'import_file_missing'       => 'Required file missing from Darwin Core Archive. :file',
    'ocr_batch_process'         => 'Error trying to create OCR batch for project id :id<br />:message',
    'missing_download_file'     => 'The file appears to be missing. If you\'d like to have the file regenerated, please contact the Biospex Administrator using the contact form and specify the Expedition title.',
    'missing_summary'           => '<h2>Error: Summary for Expedition :title could not be found.</h2>',
    'resource_url_required'     => 'Must be valid URL',
    'resource_empty'            => 'Type selected'
);
