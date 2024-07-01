import { API_URL } from "@/config";
import {
    Applicant,
    Company,
    CompanyActivity,
    CompanyType,
    Contact,
    Diploma,
    FAQ,
    Job,
    News,
    Request,
    Service,
    SkillHR,
    Subscriber,
    TeamMember,
    Testimony,
} from "@types";
import axios from "axios";

type ToData<T> = T | T[];
type ResUnit =
    | Applicant
    | Company
    | CompanyActivity
    | CompanyType
    | Contact
    | Diploma
    | FAQ
    | Job
    | News
    | Request
    | Service
    | SkillHR
    | Subscriber
    | TeamMember
    | Testimony;
export type RequestData = ToData<ResUnit>;
export type FromData<T extends RequestData> = T extends Array<infer U> ? U : T;
export type Resource =
    | "applicants"
    | "companies"
    | "company_activities"
    | "company_types"
    | "contacts"
    | "diplomas"
    | "faqs"
    | "skills-hr"
    | "jobs"
    | "news"
    | "requests"
    | "services"
    | "subscribers"
    | "team-members"
    | "testimonies";

export async function fetch<T extends RequestData>({
    resource,
    method,
    data: body,
    params,
}: {
    resource: Resource;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: FromData<T>;
    params?: Record<string, string | number | boolean>;
}) {
    try {
        const res = await axios.get<T>(
            `${
                "/api/" +
                resource.split("_").join("-") +
                ((method === "PUT" || method === "DELETE") && body?.id
                    ? `${body?.id}/`
                    : "")
            }${
                params
                    ? `?${Object.entries(params)
                          .map(([key, value]) => `${key}=${value}`)
                          .join("&")}`
                    : ""
            }`,
            {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                data: body,
            }
        );
        return res.data as T | undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}
