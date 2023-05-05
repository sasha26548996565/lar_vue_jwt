<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/{page}', 'IndexController@index')->where('page', '.*');

Auth::routes();
