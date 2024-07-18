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
            $user = $request->user();
            $token = $user->createToken('auth-token');

            return response()->json([
                'access_token' => $token->plainTextToken,
                'user' => [
                    'role' => $user->role // Assuming 'role' is a column in your users table
                ]
            ]);
        } else {
            return response()->json(['error' => 'Login failed'], 401);
        }
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
