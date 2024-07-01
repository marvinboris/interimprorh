<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Company extends Model
{
    use HasFactory, HasApiTokens;

    protected $fillable = [
        'company_activity_id', 'company_type_id', 'name', 'email', 'phone', 'creation', 'contact_person'
    ];

    public function company_activity()
    {
        return $this->belongsTo(CompanyActivity::class);
    }

    public function company_type()
    {
        return $this->belongsTo(CompanyType::class);
    }
}
