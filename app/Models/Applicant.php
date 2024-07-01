<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Applicant extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'email', 'password', 'phone', 'photo', 'first_name', 'last_name', 'job', 'city', 'country', 'diploma_id', 'experience', 'biography', 'availability'
    ];

    protected $append = [
        'status'
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
}
