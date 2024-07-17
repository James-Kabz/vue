<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/signup', [AuthController ::class ,'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/addProduct', [ProductController::class, 'addProduct']);
Route::get('/getProduct/{id}', [ProductController::class, 'getProduct']);
Route::get('/getProducts', [ProductController::class, 'getProducts']);