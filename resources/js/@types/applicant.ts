export type Applicant = {
    id: string;
    first_name: string;
    last_name: string;
    job: string;
    city: string;
    country: string;
    degree: string;
    experience: number;
    email: string;
    photo?: string;
    password?: string;
    password_confirmation?: string;
    resume?: string;
    phone: string;
    biography: string;
    availability: number;
};
