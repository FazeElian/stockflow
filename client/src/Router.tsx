import { BrowserRouter, Route, Routes } from "react-router-dom";

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

export default function Router () {
    return (
        <BrowserRouter>
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
                <Route path="/admin/*">
                    <Route path="dashboard" element={<DashboardView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}