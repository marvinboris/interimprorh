<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'applicant_id', 'location', 'contract_id', 'status'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }

    public function contract()
    {
        return $this->belongsTo(Contract::class);
    }
}
