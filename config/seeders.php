<?php

return [
    /**
     * Settings for seeding a user for the developer.
     */
    'user' => [

        /**
         * Full name
         */
        'name' => env('TEST_USER_NAME', fake()->name()),

        /**
         * Email address
         */
        'email' => env('TEST_USER_EMAIL', fake()->email()),

        /**
         * A password
         */
        'password' => env('TEST_USER_PASSWORD', fake()->sentence())
    ]
];
