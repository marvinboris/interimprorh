export type Company = {
    id: string;
    name: string;
    email: string;
    phone: string;
    password?: string;
    oldPassword?: string;
    creation: string;
    contact_person: string;
    logo?: string;
    location: string;
    maintenance?: boolean;
};

export type CompanyType = {
    id: string;
    name: string;
};

export type CompanyActivity = {
    id: string;
    name: string;
};
