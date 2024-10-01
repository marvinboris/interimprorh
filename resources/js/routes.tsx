import { selectAuth } from "./features/auth/authSlice";
import { useAppSelector } from "./hooks";
import {
    LayoutAdmin,
    LayoutAuthUesr,
    LayoutEmployer,
    LayoutFrontend,
    LayoutUser,
} from "./layouts";
import {
    PageAbout,
    PageAdminApplications,
    PageAdminApplicationsAdd,
    PageAdminAuthLogin,
    PageAdminCompanies,
    PageAdminCompaniesAdd,
    PageAdminDashboard,
    PageAdminProfiles,
    PageAdminSettings,
    PageAuthEmployerLogin,
    PageAuthEmployerRegister,
    PageAuthLogin,
    PageAuthRegister,
    PageBlog,
    PageBlogDetails,
    PageContact,
    PageEmployerApplications,
    PageEmployerApplicationsAdd,
    PageEmployerDashboard,
    PageEmployerRequests,
    PageEmployerSettings,
    PageHome,
    PageSearch,
    PageServiceEngineeringTraining,
    PageServiceHR,
    PageServiceInterim,
    PageServiceService,
    PageServiceTeam,
    PageTrainings,
    PageUserDashboard,
    PageUserProfile,
    PageUserProfileResume,
    PageUserRequests,
} from "./pages";

import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    const { token } = useAppSelector(selectAuth);

    return (
        <Routes>
            {token ? (
                <>
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route
                            path="/admin/settings"
                            element={<PageAdminSettings />}
                        />
                        <Route
                            path="/admin/companies/add"
                            element={<PageAdminCompaniesAdd />}
                        />
                        <Route
                            path="/admin/companies"
                            element={<PageAdminCompanies />}
                        />
                        <Route
                            path="/admin/profiles"
                            element={<PageAdminProfiles />}
                        />
                        <Route
                            path="/admin/applications/add"
                            element={<PageAdminApplicationsAdd />}
                        />
                        <Route
                            path="/admin/applications"
                            element={<PageAdminApplications />}
                        />
                        <Route path="/admin" element={<PageAdminDashboard />} />
                    </Route>

                    <Route path="/employer" element={<LayoutEmployer />}>
                        <Route
                            path="/employer/settings"
                            element={<PageEmployerSettings />}
                        />
                        <Route
                            path="/employer/applications/add"
                            element={<PageEmployerApplicationsAdd />}
                        />
                        <Route
                            path="/employer/applications"
                            element={<PageEmployerApplications />}
                        />
                        <Route
                            path="/employer/requests"
                            element={<PageEmployerRequests />}
                        />
                        <Route
                            path="/employer"
                            element={<PageEmployerDashboard />}
                        />

                        <Route
                            path="/employer/*"
                            element={<Navigate to="/employer" />}
                        />
                    </Route>
                </>
            ) : (
                <Route path="/admin" element={<PageAdminAuthLogin />} />
            )}

            <Route path="" element={<LayoutFrontend />}>
                {token ? (
                    <Route path="/user" element={<LayoutUser />}>
                        <Route
                            path="/user/profile/resume"
                            element={<PageUserProfileResume />}
                        />
                        <Route
                            path="/user/profile"
                            element={<PageUserProfile />}
                        />
                        <Route
                            path="/user/requests"
                            element={<PageUserRequests />}
                        />
                        <Route path="/user" element={<PageUserDashboard />} />
                    </Route>
                ) : null}

                <Route path="/contact" element={<PageContact />} />
                <Route path="/search" element={<PageSearch />} />
                <Route path="/careers" element={<Navigate to="/search" />} />
                <Route
                    path="/services/prestation-de-services"
                    element={<PageServiceService />}
                />
                <Route
                    path="/services/mise-a-disposition-du-personnel"
                    element={<PageServiceTeam />}
                />
                <Route
                    path="/services/interim-et-placement-des-travailleurs"
                    element={<PageServiceInterim />}
                />
                <Route
                    path="/services/conseil-rh"
                    element={<PageServiceHR />}
                />
                <Route
                    path="/services/ingenierie-de-formation"
                    element={<PageServiceEngineeringTraining />}
                />
                <Route path="/trainings" element={<PageTrainings />} />
                <Route path="/blog/:slug" element={<PageBlogDetails />} />
                <Route path="/blog" element={<PageBlog />} />
                <Route path="/about" element={<PageAbout />} />

                <Route path="" element={<PageHome />} />

                <Route path="" element={<LayoutAuthUesr />}>
                    {token ? null : (
                        <>
                            <Route
                                path="/employer/register"
                                element={<PageAuthEmployerRegister />}
                            />
                            <Route
                                path="/employer/login"
                                element={<PageAuthEmployerLogin />}
                            />
                        </>
                    )}
                    <Route path="/register" element={<PageAuthRegister />} />
                    <Route path="/login" element={<PageAuthLogin />} />
                </Route>

                {token ? null : (
                    <Route
                        path="/employer"
                        element={<Navigate to="/employer/login" />}
                    />
                )}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
