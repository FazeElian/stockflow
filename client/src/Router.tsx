import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

// Company view
import HomeView from "./views/HomeView";

// User module views
import RegisterView from "./views/auth/RegisterView";
import LoginView from "./views/auth/LoginView";
import ConfirmAccountView from "./views/auth/ConfirmAccount";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";
import ValidateCodeView from "./views/auth/ValidateCodeView";
import ResetPasswordView from "./views/auth/ResetPasswordView";

// Admin views
import DashboardView from "./views/admin/DashboardView";

// Admin layout component
import AdminLayout from "./components/templates/AdminLayout";

// Loading component
import { Loading } from "./components/atoms/Loading";

export default function Router () {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* Home */}
                    <Route index element={<HomeView />} />

                    {/* Users */}
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
                    <Route path="/auth/validate-code" element={<ValidateCodeView />} />
                    <Route path="/auth/reset-password/:code" element={<ResetPasswordView />} />

                    {/* Admin */}
                    <Route path="/admin/*" element={<AdminLayout />}>
                        <Route path="dashboard" element={<DashboardView />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}