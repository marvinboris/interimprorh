import { getCompanyTypes, getLanguages } from "@/data";
import {
    Applicant,
    CompanyType,
    Diploma,
    FAQ,
    Job,
    Language,
    News,
    Request,
    Service,
    SkillHR,
    TeamMember,
    Testimony,
} from "@types";
import React from "react";
import { useFetch } from "./use-fetch";

export function useTeam() {
    return useFetch<TeamMember[]>({
        resource: "team-members",
    });
}

export function useCompanies() {
    const result = useFetch<TeamMember[]>({
        resource: "companies",
    });

    return {
        ...result,
        options: result.data?.map((company) => ({
            value: company.id,
            label: company.name,
        })),
    };
}

export function useCompanyTypes() {
    const [loading, setLoading] = React.useState(false);
    const [companyTypes, setCompanyTypes] = React.useState<CompanyType[]>();

    React.useEffect(() => {
        const handle = async () => {
            setLoading(true);

            try {
                const companyTypes = await getCompanyTypes();
                setCompanyTypes(companyTypes);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        handle();
    }, []);

    return {
        loading,
        companyTypes,
        options: companyTypes?.map((company) => ({
            value: company.id,
            label: company.name,
        })),
    };
}

export function useLanguages() {
    const [languages, setLanguages] = React.useState<Language[]>([]);

    React.useEffect(() => {
        const handle = async () => {
            try {
                const languages = await getLanguages();
                setLanguages(languages);
            } catch (error) {
                console.log(error);
            }
        };

        handle();
    }, []);

    return {
        languages,
        options: languages.map((language) => ({
            value: language.abbr,
            label: language.name,
        })),
    };
}

export function useContracts() {
    const [contracts, setContracts] = React.useState<string[]>([]);

    React.useEffect(() => {
        const contracts: string[] = ["CDD", "CDI"];

        setContracts(contracts);
    }, []);

    return {
        contracts,
        options: contracts.map((contract) => ({
            value: contract,
            label: contract,
        })),
    };
}

export function useDiplomae() {
    const result = useFetch<Diploma[]>({
        resource: "diplomas",
    });

    return {
        ...result,
        options: result.data?.map((diploma) => ({
            value: diploma.id,
            label: diploma.name,
        })),
    };
}

export function useNews() {
    return useFetch<News[]>({
        resource: "news",
    });
}

export function useFaq() {
    return useFetch<FAQ[]>({
        resource: "faqs",
    });
}

export function useServices() {
    return useFetch<Service[]>({
        resource: "services",
    });
}

export function useTestimonies() {
    return useFetch<Testimony[]>({
        resource: "testimonies",
    });
}

export function useJobs() {
    return useFetch<Job[]>({
        resource: "jobs",
    });
}

export function useLatestNews() {
    return useFetch<News[]>({
        resource: "news",
        params: { count: 3 },
    });
}

export function useRequests() {
    return useFetch<Request[]>({
        resource: "requests",
    });
}

export function useHR() {
    return useFetch<SkillHR[]>({
        resource: "skills-hr",
    });
}

export function useApplicants() {
    return useFetch<Applicant[]>({
        resource: "applicants",
    });
}
