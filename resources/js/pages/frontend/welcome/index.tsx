import { Header, Polygon1, Section, SectionTitle } from "@/components";
import { Trans, useTranslation } from "react-i18next";

export function PageWelcome() {
    const { t } = useTranslation();

    return (
        <>
            <Header>{t("WelcomeWord/Header")}</Header>

            <Section className="py-12 overflow-hidden">
                <SectionTitle>
                    <Trans i18nKey="WelcomeWord/Title">
                        Welcome Word <br /> <span>from the Director</span>
                    </Trans>
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 lg:mt-12">
                    <div className="lg:text-lg text-justify lg:space-y-2.5">
                        <Trans i18nKey="WelcomeWord/Description">
                            <p>
                                <strong>Dear Customers and Partners,</strong>
                            </p>
                            <p>
                                It is with great pride and immense gratitude
                                that I present our catalog to you.
                            </p>
                            <p>
                                Since the creation of our company, our mission
                                has been clear: to provide superior quality
                                human resources solutions, tailored to the
                                unique needs of businesses in Cameroon.
                            </p>
                            <p>
                                In a constantly changing world, where the
                                challenges of human resources management are
                                becoming increasingly complex, we have been able
                                to adapt and innovate to remain at the forefront
                                of our sector.
                            </p>
                            <p>
                                Thanks to a dedicated and highly qualified team,
                                we have been able to support our clients in the
                                placement of competent personnel, the provision
                                of specialized resources, as well as the
                                continuous training of their teams.
                            </p>
                            <p>
                                Our commitment to excellence is reflected not
                                only in the quality of the services we offer,
                                but also in our personalized approach, focused
                                on customer satisfaction. Each company we serve
                                is unique, and it is with this conviction that
                                we develop tailor-made solutions to meet their
                                specific needs.
                            </p>
                            <p>
                                I would like to thank our partners for their
                                trust and collaboration, and to salute our
                                customers for their loyalty. Together, we have
                                built a relationship based on trust and mutual
                                success.
                            </p>
                            <p>
                                <strong>
                                    We remain committed to supporting you in
                                    your future projects, by providing
                                    innovative and effective solutions. To all
                                    our future customers, we invite you to
                                    discover our offer and join our community.
                                </strong>
                            </p>
                            <p>
                                We are convinced that our expertise and
                                commitment will make the difference for your
                                business.
                            </p>
                            <p>Thank you for your trust,</p>
                            <p>Sincerely</p>
                        </Trans>
                    </div>

                    <div className="relative lg:static h-[320px] lg:h-auto order-2 lg:order-1">
                        <Polygon1 mainSrc="/images/director.png" />
                    </div>
                </div>
            </Section>
        </>
    );
}
