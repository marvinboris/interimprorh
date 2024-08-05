<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Company extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = 'companies';

    protected $directory = '/images/companies/';

    protected $fillable = [
        'company_activity_id', 'company_type_id', 'name', 'email', 'phone', 'password', 'creation', 'contact_person'
    ];

    protected $hidden = [
        'password',
    ];

    public static function personalAccessToken()
    {
        return 'Employer Personal Access Token';
    }

    public static function type()
    {
        return 'employer';
    }

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function company_activity()
    {
        return $this->belongsTo(CompanyActivity::class);
    }

    public function company_type()
    {
        return $this->belongsTo(CompanyType::class);
    }
}
