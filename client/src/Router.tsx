import { BrowserRouter, Route, Routes } from "react-router-dom";

// Headers
import { HeaderCompany } from "./components/company/HeaderCompany";
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Company Views
import HomeView from "./views/company/HomeView";

// Users
import RegisterView from "./views/company/auth/RegisterView";
import LoginView from "./views/company/auth/LoginView";
import ForgotPasswordView from "./views/company/auth/ForgotPasswordView";
import ConfirmAccountView from "./views/company/auth/ConfirmAccountView";
import ResetPasswordView from "./views/company/auth/ResetPaswordView";
import ValidateCodeView from "./views/company/auth/ValidateTokenView.tsx";

// Admin views
import DashboardView from "./views/admin/DashboardView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderCompany />}>
          <Route index element={<HomeView />} />
        </Route>

        {/* Users module */}
        <Route path="auth/*">
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="forgot-password" element={<ForgotPasswordView />} />
          <Route path="confirm-account" element={<ConfirmAccountView />} />
          <Route path="validate-code" element={<ValidateCodeView />} />
          <Route path="reset-password/:token" element={<ResetPasswordView />} />
        </Route>

        <Route path="admin/*" element={<HeaderAdmin />}>
          <Route path="dashboard" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}