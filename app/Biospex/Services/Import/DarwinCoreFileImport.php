<?php

namespace Biospex\Services\Import;

class DarwinCoreFileImport extends ImportServiceAbstract
{
    /**
     * Upload subjects for project.
     *
     * @param $id
     * @return \Illuminate\Validation\Validator|void
     */
    public function import($id)
    {
        $validator = \Validator::make(
            ['dwc' => \Input::file('dwc')],
            ['dwc' => 'required|mimes:zip']
        );

        if ($validator->fails()) {
            print_r($validator->messages()->toJson());
            exit;
            return $validator;
        }

        $this->setDirectory('config.subjectImportDir');

        $filename = $this->moveFile('dwc');
        $import = $this->importInsert(\Input::get('user_id'), $id, $filename);
        $this->setQueue('config.beanstalkd.import');

        \Queue::push('Biospex\Services\Queue\DarwinCoreFileImportQueue', ['id' => $import->id], $this->queue);

        return;
    }
}
