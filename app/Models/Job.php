<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'join', 'description', 'company_id', 'salary_low', 'salary_high', 'location', 'contract_id', 'diploma_id', 'languages', 'responsibilities', 'qualifications', 'advantages', 'experience'
    ];

    protected $casts = [
        'languages' => 'array',
        'responsibilities' => 'array',
        'qualifications' => 'array',
        'advantages' => 'array',
        'experience' => 'array'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function contract()
    {
        return $this->belongsTo(Contract::class);
    }

    public function diploma()
    {
        return $this->belongsTo(Diploma::class);
    }
}
