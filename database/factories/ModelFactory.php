<?php

use App\Models\Expedition;
use App\Models\Faq;
use App\Models\FaqCategory;
use App\Models\Group;
use App\Models\Profile;
use App\Models\Project;
use App\Models\User;
use Faker\Generator;



$factory->define(Faq::class, function ($faker) {
    return [
        'faq_category_id' => factory(FaqCategory::class)->make()->id,
        'question' => $faker->sentence(5),
        'answer' => $faker->sentence(20),
        
    ];
});

$factory->define(FaqCategory::class, function ($faker) {
    $name = $faker->unique()->words($nb = 3, $variableNbWords = true);
    return [
        'name' => $name,
        'label' => $name
    ];
});


/*
$factory->define(User::class, function (Generator $faker) {
    return [
        'uuid' => $faker->uuid,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'activated' => 1,
        'remember_token' => str_random(10),
    ];
});

$factory->define(Profile::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'timezone' => $faker->timezone,
    ];
});

$factory->define(Group::class, function (Generator $faker) {
    $name = $faker->word;
    return [
        'uuid' => $faker->uuid,
        'name' => $name,
        'label' => ucfirst($name),
    ];
});

$factory->define(Project::class, function (Generator $faker) {

    return [
        'uuid' => $faker->uuid,
        'title' => $faker->sentence(3),
        'contact' => $faker->name,
        'contact_email' => $faker->safeEmail,
        'contact_title' => $faker->word,
        'organization_website' => $faker->url,
        'organization' => $faker->company,
        'project_partners' => $faker->company,
        'funding_source' => $faker->company,
        'description_short' => $faker->sentence,
        'description_long' => $faker->paragraph,
        'incentives' => $faker->sentence,
        'geographic_scope' => $faker->country,
        'taxonomic_scope' => $faker->words(2),
        'keywords' => $faker->word . ', ' . $faker->word . ', ' .$faker->word,
        'workflow_id' => $faker->biasedNumberBetween($min = 1, $max = 5),
        'blog_url' => $faker->url,
    ];
});

$factory->define(Expedition::class, function (Generator $faker) {

    return [
        'uuid' => $faker->uuid,
        'title' => $faker->sentence(3),
        'description' => $faker->sentence,
        'keywords' => $faker->word . ', ' . $faker->word . ', ' .$faker->word,
    ];
});
*/
