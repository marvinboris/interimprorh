import {
    Button,
    ButtonAdd,
    CustomSelect,
    Input,
    Loading,
    Section,
    SectionTitle,
    Transition,
} from "@/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Status } from "@/enums";
import { useAppDispatch, useAppSelector, useState } from "@/hooks";
import { selectAuth, userEdit } from "@/features";
import { isApplicant } from "@/utils";

import Certificate from "./ui/certificate";
import Header from "../ui/header";
import Job from "./ui/job";
import Language from "./ui/language";
import Skill from "./ui/skill";
import Training from "./ui/training";

export function PageUserProfileQuestionnaire() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { data: user, status } = useAppSelector(selectAuth);
    if (!isApplicant(user)) return null;

    const [firstName, setFirstName, currentFirstName] = useState(
        user.first_name
    );
    const [lastName, setLastName, currentLastName] = useState(user.last_name);
    const [email, setEmail, currentEmail] = useState(user.email);
    const [birthdate, setBirthdate, currentBirthdate] = useState(
        user.birthdate
    );
    const [gender, setGender, currentGender] = useState(user.gender || "");
    const [nationality, setNationality, currentNationality] = useState(
        user.nationality || ""
    );
    const [nidNumber, setNidNumber, currentNidNumber] = useState(
        user.nid_number || ""
    );
    const [nidValidity, setNidValidity, currentNidValidity] = useState(
        user.nid_validity || ""
    );
    const [maritalStatus, setMaritalStatus, currentMaritalStatus] = useState(
        user.marital_status || ""
    );
    const [address, setAddress, currentAddress] = useState(user.address || "");

    const currentTrainings = React.useMemo(
        () => user.trainings || [],
        [user.trainings]
    );
    const [trainings, setTrainings] = useState(currentTrainings);

    const currentCertificates = React.useMemo(
        () => user.certificates || [],
        [user.certificates]
    );
    const [certificates, setCertificates] = useState(currentCertificates);

    const currentSkills = React.useMemo(() => user.skills || [], [user.skills]);
    const [skills, setSkills] = useState(currentSkills);

    const currentLanguages = React.useMemo(
        () => user.languages || [],
        [user.languages]
    );
    const [languages, setLanguages] = useState(currentLanguages);

    const currentJobs = React.useMemo(
        () => user.job_history || [],
        [user.job_history]
    );
    const [jobs, setJobs] = useState(currentJobs);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            userEdit({
                ...user,
                first_name: firstName,
                last_name: lastName,
                email,
                birthdate,
                gender,
                nationality,
                nid_number: nidNumber,
                nid_validity: nidValidity,
                marital_status: maritalStatus,
                address,
                trainings,
                certificates,
                skills,
                languages,
                job_history: jobs,
            })
        );
    };

    return (
        <div className="divide-y divide-neutral-200">
            <Header />

            <Section className="relative">
                <Transition show={status === Status.LOADING}>
                    <div className="absolute inset-0 z-10">
                        <Loading />
                    </div>
                </Transition>

                <form
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                    className="lg:w-3/4 grid gap-2 md:gap-4 xl:gap-6 py-6"
                >
                    <div className="gap-3 grid md:grid-cols-2">
                        <Input
                            name="first_name"
                            value={firstName}
                            label={t("First name")}
                            placeholder={t("Enter your first name")}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <Input
                            name="last_name"
                            label={t("Last name")}
                            value={lastName}
                            placeholder={t("Enter your last name")}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <Input
                            type="email"
                            name="email"
                            value={email}
                            label={t("E-mail address")}
                            placeholder="example@interimprorh.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            type="date"
                            name="birthdate"
                            value={birthdate}
                            label={t("Birthdate")}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />

                        <CustomSelect
                            name="gender"
                            value={gender}
                            label={t("Gender")}
                            onChange={setGender}
                        />

                        <CustomSelect
                            name="nationality"
                            value={nationality}
                            label={t("Nationality")}
                            onChange={setNationality}
                        />

                        <Input
                            name="nid_number"
                            value={nidNumber}
                            label={t("NID number")}
                            placeholder={t("Enter your NID number")}
                            onChange={(e) => setNidNumber(e.target.value)}
                        />

                        <Input
                            type="date"
                            name="nid_validity"
                            value={nidValidity}
                            label={t("NID validity")}
                            onChange={(e) => setNidValidity(e.target.value)}
                        />

                        <CustomSelect
                            name="marital_status"
                            value={maritalStatus}
                            label={t("Marital status")}
                            onChange={setMaritalStatus}
                        />

                        <Input
                            name="address"
                            value={address}
                            label={t("Current address")}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={t("Enter your current address")}
                        />
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <SectionTitle user>{t("Trainings")}</SectionTitle>

                            <ButtonAdd
                                onClick={() =>
                                    setTrainings((p) =>
                                        p.concat({
                                            diploma: "",
                                            school: "",
                                            year: "",
                                            specialty: "",
                                        })
                                    )
                                }
                            />
                        </div>

                        {trainings.map((item, i) => (
                            <Training
                                index={i}
                                item={item}
                                key={"training-" + i}
                                setTrainings={setTrainings}
                            />
                        ))}
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <SectionTitle user>
                                {t("Certificates")}
                            </SectionTitle>

                            <ButtonAdd
                                onClick={() =>
                                    setCertificates((p) =>
                                        p.concat({
                                            name: "",
                                            organization: "",
                                            year: "",
                                        })
                                    )
                                }
                            />
                        </div>

                        {certificates.map((item, i) => (
                            <Certificate
                                index={i}
                                item={item}
                                key={"certificate-" + i}
                                setCertificates={setCertificates}
                            />
                        ))}
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <SectionTitle user>{t("IT skills")}</SectionTitle>

                            <ButtonAdd
                                onClick={() =>
                                    setSkills((p) =>
                                        p.concat({
                                            name: "",
                                        })
                                    )
                                }
                            />
                        </div>

                        {skills.map((item, i) => (
                            <Skill
                                index={i}
                                item={item}
                                key={"skill-" + i}
                                setSkills={setSkills}
                            />
                        ))}
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <SectionTitle user>{t("Languages")}</SectionTitle>

                            <ButtonAdd
                                onClick={() =>
                                    setLanguages((p) =>
                                        p.concat({
                                            name: "",
                                            level: "",
                                        })
                                    )
                                }
                            />
                        </div>

                        {languages.map((item, i) => (
                            <Language
                                index={i}
                                item={item}
                                key={"language-" + i}
                                setLanguages={setLanguages}
                            />
                        ))}
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <SectionTitle user>{t("Experience")}</SectionTitle>

                            <ButtonAdd
                                onClick={() =>
                                    setJobs((p) =>
                                        p.concat({
                                            company: "",
                                            field: "",
                                            period_end: "",
                                            period_start: "",
                                            position: "",
                                        })
                                    )
                                }
                            />
                        </div>

                        {jobs.map((item, i) => (
                            <Job
                                index={i}
                                item={item}
                                key={"job-" + i}
                                setJobs={setJobs}
                            />
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                        <Button
                            color="outline-secondary"
                            onClick={() => {
                                setFirstName(currentFirstName);
                                setLastName(currentLastName);
                                setEmail(currentEmail);
                                setBirthdate(currentBirthdate);
                                setGender(currentGender);
                                setNationality(currentNationality);
                                setNidNumber(currentNidNumber);
                                setNidValidity(currentNidValidity);
                                setMaritalStatus(currentMaritalStatus);
                                setAddress(currentAddress);

                                setTrainings(currentTrainings);
                                setCertificates(currentCertificates);
                                setSkills(currentSkills);
                                setLanguages(currentLanguages);
                                setJobs(currentJobs);
                            }}
                        >
                            {t("Cancel")}
                        </Button>

                        <Button type="submit">{t("Save")}</Button>
                    </div>
                </form>
            </Section>
        </div>
    );
}
