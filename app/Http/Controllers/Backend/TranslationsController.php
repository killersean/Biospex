<?php

namespace App\Http\Controllers\Backend;

use App\Repositories\Interfaces\User;
use App\Http\Controllers\Controller;
use Barryvdh\TranslationManager\Models\Translation;
use Illuminate\Support\Collection;
use Barryvdh\TranslationManager\Manager;

class TranslationsController extends Controller
{
    /** @var \Barryvdh\TranslationManager\Manager  */
    protected $manager;

    /**
     * @var User
     */
    private $userContract;

    /**
     * TranslationsController constructor.
     * @param Manager $manager
     * @param User $userContract
     */
    public function __construct(Manager $manager, User $userContract)
    {
        $this->manager = $manager;
        $this->userContract = $userContract;
    }

    /**
     * Get index page.
     *
     * @param null $group
     * @return mixed
     */
    public function getIndex($group = null)
    {
        $user = $this->userContract->findWith(request()->user()->id, ['profile']);

        $locales = $this->loadLocales();
        $groups = Translation::groupBy('group');
        $excludedGroups = $this->manager->getConfig('exclude_groups');
        if($excludedGroups){
            $groups->whereNotIn('group', $excludedGroups);
        }

        $groups = $groups->pluck('group', 'group');
        if ($groups instanceof Collection) {
            $groups = $groups->all();
        }
        $groups = [''=>'Choose a group'] + $groups;
        $numChanged = Translation::where('group', $group)->where('status', Translation::STATUS_CHANGED)->count();


        $allTranslations = Translation::where('group', $group)->orderBy('key', 'asc')->get();
        $numTranslations = count($allTranslations);
        $translations = [];
        foreach($allTranslations as $translation){
            $translations[$translation->key][$translation->locale] = $translation;
        }

        return view('backend.translations.index')
            ->with('user', $user)
            ->with('translations', $translations)
            ->with('locales', $locales)
            ->with('groups', $groups)
            ->with('group', $group)
            ->with('numTranslations', $numTranslations)
            ->with('numChanged', $numChanged)
            ->with('editUrl', route('admin.translations.edit', [$group]))
            ->with('deleteEnabled', $this->manager->getConfig('delete_enabled'));
    }

    /**
     * Get View.
     *
     * @param $group
     * @param null $sub_group
     * @return mixed
     */
    public function getView($group, $sub_group = null)
    {
        if ($sub_group) {
            return $this->getIndex($group.'/'.$sub_group);
        }

        return $this->getIndex($group);
    }

    /**
     * Load locales.
     *
     * @return array
     */
    protected function loadLocales()
    {
        //Set the default locale as the first one.
        $locales = Translation::groupBy('locale')->pluck('locale');
        if ($locales instanceof Collection) {
            $locales = $locales->all();
        }
        $locales = array_merge([config('app.locale')], $locales);
        return array_unique($locales);
    }

    /**
     * Add new keys and data.
     *
     * @param $group
     * @param null $sub_group
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postAdd($group, $sub_group = null)
    {
        $keys = explode("\n", request()->get('keys'));

        if ($sub_group) {
            $group = $group . "/" . $sub_group;
        }

        foreach($keys as $key){
            $key = trim($key);
            if($group && $key){
                $this->manager->missingKey('*', $group, $key);
            }
        }
        return redirect()->back();
    }

    /**
     * Edit keys and data.
     *
     * @param $group
     * @param null $sub_group
     * @return array
     */
    public function postEdit($group, $sub_group = null)
    {
        if(!in_array($group, $this->manager->getConfig('exclude_groups'))) {
            $name = request()->get('name');
            $value = request()->get('value');

            list($locale, $key) = explode('|', $name, 2);
            $translation = Translation::firstOrNew([
                'locale' => $locale,
                'group' => $sub_group ? $group . "/" . $sub_group: $group,
                'key' => $key,
            ]);
            $translation->value = (string) $value ?: null;
            $translation->status = Translation::STATUS_CHANGED;
            $translation->save();
            return array('status' => 'ok');
        }
    }

    /**
     * Delete resource.
     *
     * @param $group
     * @param $key
     * @return array
     */
    public function postDelete($group, $key)
    {
        if(!in_array($group, $this->manager->getConfig('exclude_groups')) && $this->manager->getConfig('delete_enabled')) {
            Translation::where('group', $group)->where('key', $key)->delete();
            return ['status' => 'ok'];
        }
    }

    /**
     * Import files.
     *
     * @return array
     */
    public function postImport()
    {
        $replace = request()->get('replace', false);
        $counter = $this->manager->importTranslations($replace);

        return ['status' => 'ok', 'counter' => $counter];
    }

    /**
     * Find.
     *
     * @return array
     */
    public function postFind()
    {
        $numFound = $this->manager->findTranslations();

        return ['status' => 'ok', 'counter' => (int) $numFound];
    }

    /**
     * Publish language files.
     *
     * @param $group
     * @param null $sub_group
     * @return array
     */
    public function postPublish($group, $sub_group = null)
    {
        $sub_group ?
            $this->manager->exportTranslations($group.'/'.$sub_group) :
            $this->manager->exportTranslations($group);

        return ['status' => 'ok'];
    }

    /**
     * Show preview for html pages.
     *
     * @param $translationId
     * @param null $locale
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function preview($translationId, $locale = null)
    {
        $user = $this->userContract->findWith(request()->user()->id, ['profile']);
        $translation = Translation::where('id', $translationId)->first();

        return view('backend.translations.preview', compact('user', 'translation'));
    }
}
