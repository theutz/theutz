<?php

return [
    'user' => [
        'name' => env('TEST_USER_NAME', fake()->name()),
        'email' => env('TEST_USER_EMAIL', fake()->email())
    ]
];
