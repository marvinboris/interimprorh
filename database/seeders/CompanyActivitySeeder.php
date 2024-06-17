<?php

namespace Database\Seeders;

use App\Models\CompanyActivity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanyActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $activities = [
            'Accounting',
            'Advertising',
            'Aerospace',
            'Agriculture',
            'Apparel',
            'Automotive',
            'Banking',
            'Biotechnology',
            'Broadcasting',
            'Business Services',
            'Chemicals',
            'Communications',
            'Construction',
            'Consulting',
            'Consumer Products',
            'Corporate Services',
            'Defense',
            'Design',
            'Distribution',
            'Education',
            'Electronics',
            'Energy',
            'Engineering',
            'Entertainment',
            'Environmental Services',
            'Finance',
            'Food & Beverage',
            'Government',
            'Healthcare',
            'Hospitality',
            'Human Resources',
            'Insurance',
            'Internet',
            'Investment Banking',
            'IT Services',
            'Legal',
            'Logistics',
            'Manufacturing',
            'Marketing',
            'Media',
            'Medical Devices',
            'Non-Profit',
            'Oil & Gas',
            'Pharmaceuticals',
            'Public Relations',
            'Real Estate',
            'Recruiting',
            'Research',
            'Retail',
            'Shipping',
            'Software',
            'Sports',
            'Technology',
            'Telecommunications',
            'Transportation',
            'Travel',
            'Utilities',
            'Venture Capital',
            'Warehousing',
            'Waste Management',
            'Wholesale',
        ];

        foreach ($activities as $activity) {
            CompanyActivity::create([
                'name' => $activity
            ]);
        }
    }
}
