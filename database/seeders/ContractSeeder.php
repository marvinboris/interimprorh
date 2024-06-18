<?php

namespace Database\Seeders;

use App\Models\Contract;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $contracts = ["CDD", "CDI"];
        foreach ($contracts as $contract) {
            Contract::create([
                'name' => $contract
            ]);
        }
    }
}
