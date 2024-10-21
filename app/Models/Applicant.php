<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Applicant extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $directory = '/files/applicants/';

    protected $fillable = [
        'email',
        'password',
        'phone',
        'photo',
        'first_name',
        'last_name',
        'job',
        'city',
        'country',
        'diploma_id',
        'experience',
        'biography',
        'availability',
        'resume',
        'birthdate',
        'gender',
        'marital_status',
        'nationality',
        'nid_number',
        'nid_validity',
        'address',
        'trainings',
        'certificates',
        'skills',
        'languages',
        'job_history'
    ];

    protected $append = [
        'status'
    ];

    protected $casts = [
        'trainings' => 'array',
        'certificates' => 'array',
        'skills' => 'array',
        'languages' => 'array',
        'job_history' => 'array',
    ];

    public static function personalAccessToken()
    {
        return 'User Personal Access Token';
    }

    public static function type()
    {
        return 'user';
    }

    public function diploma()
    {
        return $this->belongsTo(Diploma::class);
    }

    public function requests()
    {
        return $this->hasMany(Request::class);
    }

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function getStatusAttribute()
    {
        $status = 0;
        if ($this->email) $status++;
        if ($this->phone) $status++;
        if ($this->photo) $status++;
        if ($this->first_name) $status++;
        if ($this->last_name) $status++;
        if ($this->job) $status++;
        if ($this->city) $status++;
        if ($this->country) $status++;
        if ($this->diploma_id) $status++;
        if ($this->experience) $status++;
        if ($this->biography) $status++;
        if ($this->availability) $status++;

        return round($status * 100 / 12);
    }

    public function getResumeAttribute($value)
    {
        return $value ? ($this->directory . $value) : null;
    }

    protected function trainings(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, true),
            set: fn($value) => json_encode($value),
        );
    }

    protected function certificates(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, true),
            set: fn($value) => json_encode($value),
        );
    }

    protected function skills(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, true),
            set: fn($value) => json_encode($value),
        );
    }

    protected function languages(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, true),
            set: fn($value) => json_encode($value),
        );
    }

    protected function jobHistory(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, true),
            set: fn($value) => json_encode($value),
        );
    }
}
