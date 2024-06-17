<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_activity_id', 'company_type_id', 'name', 'email', 'phone', 'creation', 'contact_person'
    ];
}
