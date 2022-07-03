<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Orbit\Concerns\Orbital;

class Experience extends Model
{
    use HasFactory;
    use Orbital;

    protected $fillable = ['title', 'slug', 'published_at'];

    public static function schema(Blueprint $table) {
        $table->string('title');
        $table->string('slug')->primary();
        $table->string('company_name')->nullable();
        $table->string('job_title')->nullable();
        $table->date('start_date')->nullable();
        $table->date('end_date')->nullable();
        $table->string('city_state')->nullable();
        $table->string('country')->nullable();
        $table->timestamp('published_at');
    }

    public function getKeyName()
    {
        return 'slug';
    }

    public function getIncrementing()
    {
        return false;
    }
}
