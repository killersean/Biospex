<?php

// Begin GroupsController
$router->get('groups')->uses('GroupsController@index')->name('admin.groups.index');
$router->get('groups/create')->uses('GroupsController@create')->name('admin.groups.create');
$router->post('groups')->uses('GroupsController@store')->name('admin.groups.store');
$router->get('groups/{groups}')->uses('GroupsController@show')->name('admin.groups.show');
$router->put('groups/{groups}')->uses('GroupsController@update')->name('admin.groups.update');
$router->delete('groups/{groups}')->uses('GroupsController@delete')->name('admin.groups.delete');
$router->delete('groups/{groups}/destroy')->uses('GroupsController@destroy')->name('admin.groups.destroy');
$router->get('groups/{groups}/restore')->uses('GroupsController@restore')->name('admin.groups.restore');
$router->post('groups/{groups}/invite')->uses('GroupsController@invite')->name('admin.groups.invite');
$router->delete('groups/{groups}/user/{user}')->uses('GroupsController@deleteUser')->name('admin.groups.deleteUser');
