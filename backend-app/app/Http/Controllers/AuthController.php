<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    //login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json(['token' => $token], 200);
        }

        throw ValidationException::withMessages([
            'email' => __('auth.failed'),
        ]);
    }

    // signup

    public function signup(Request $request)
    {
        $user_input = $request->all();

        User::create($user_input);

        return "User created successfully";
    }

    // log out user
    // public function logout(Request $request)
    // {
    //     Auth::logout();
    //     return response()->json(['message' => 'Logged out successfully'], 200);
    // }
    public function logout(Request $request)
    {
   
        $user = $request->user();

        $user->tokens()->delete();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }

}
