<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\User\StoreRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(StoreRequest $request): Response
    {
        $params = $request->validated();
        $params['password'] = Hash::make($params['password']);
        $user = User::create($params);
        $accessToken = auth()->tokenById($user->id);
        return response(['access_token' => $accessToken]);
    }
}
