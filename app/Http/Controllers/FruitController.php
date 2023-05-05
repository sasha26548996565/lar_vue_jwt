<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\FruitResource;
use App\Models\Fruit;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class FruitController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return FruitResource::collection(Fruit::latest()->get());
    }
}
