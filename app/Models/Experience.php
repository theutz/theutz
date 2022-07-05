<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Orbit\Concerns\Orbital;

class Experience extends Model
{
    use HasFactory;
    use Orbital;

    protected $fillable = [
        'title',
        'slug',
        'published_at',
        'start_date',
        'end_date',
        'company_name',
        'city_state',
        'country',
        'content',
        'brief',
        'job_title'
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'start_date' => 'datetime',
        'end_date' => 'datetime'
    ];

    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('slug')->primary();
        $table->string('company_name')->nullable();
        $table->string('job_title')->nullable();
        $table->timestamp('start_date')->nullable();
        $table->timestamp('end_date')->nullable();
        $table->string('city_state')->nullable();
        $table->string('country')->nullable();
        $table->text('brief')->nullable();
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

    protected function next(): Attribute
    {
        return Attribute::make(
            get: fn() => static::where('start_date', '>', $this->start_date)->first()
        );
    }

    protected function prev(): Attribute
    {
        return Attribute::make(
            get: fn () => static::where('start_date', '<', $this->start_date)->get()->last()
        );
    }
}
