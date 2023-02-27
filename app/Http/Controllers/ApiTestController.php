<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiTestController extends Controller
{
    public function index() {
        $response = Http::get('https://jsonplaceholder.typicode.com/posts');
        $responseJson = $response->json();
        dump($responseJson);
    }
}
