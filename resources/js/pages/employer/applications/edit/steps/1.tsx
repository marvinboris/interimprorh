import { Input, CustomSelect } from "@/components";
import { useCompanies, useContracts, useDiplomae, useLanguages } from "@/hooks";
import React from "react";
import { useJob } from "../context";

export function Step1() {
    const { application } = useJob();

    const { options: contractOptions } = useContracts();
    const { options: diplomaOptions } = useDiplomae();
    const { options: languageOptions } = useLanguages();

    const [languages, setLanguages] = React.useState<string[]>(
        application?.languages || []
    );

    return (
        <>
            <Input
                name="name"
                label="Job position"
                defaultValue={application?.name}
            />
            <Input
                name="join"
                type="date"
                label="Expected join date"
                defaultValue={application?.join}
            />
            <CustomSelect
                multiple
                name="languages[]"
                label="Languages"
                value={languages}
                onChange={setLanguages}
                options={languageOptions}
            />
            <CustomSelect
                name="contract_id"
                label="Contract type"
                options={contractOptions}
                defaultValue={application?.contract_id}
            />
            <CustomSelect
                name="diploma_id"
                label="Diploma required"
                options={diplomaOptions}
                defaultValue={application?.diploma_id}
            />
            <Input
                name="salary_high"
                type="number"
                label="Salary"
                placeholder="High"
                defaultValue={application?.salary_high}
                addon={
                    <input
                        name="salary_low"
                        type="number"
                        placeholder="Low"
                        defaultValue={application?.salary_low}
                        className="flex-1 !outline-none !border-0 !ring-0 mx-3"
                    />
                }
                append="/m"
            />
            <Input
                name="location"
                label="Location / city"
                defaultValue={application?.location}
            />
            <Input
                name="experience"
                type="number"
                label="Experience"
                defaultValue={application?.experience}
            />
        </>
    );
}
