import { BrowserRouter, Route, Routes } from "react-router-dom";

// Company views
import HomeView from "./views/company/HomeView";
import RegisterView from "./views/company/auth/RegisterView";
import LoginView from "./views/company/auth/LoginView";
import ConfirmAccountView from "./views/company/auth/ConfirmAccountView";
import ForgotPasswordView from "./views/company/auth/ForgotPasswordView";
import ResetPasswordView from "./views/company/auth/ResetPaswordView";
import ValidateCodeView from "./views/company/auth/ValidateTokenView";

export default function Router () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
          <Route path="/auth/reset-password/:token" element={<ResetPasswordView />} />
          <Route path="/auth/validate-token" element={<ValidateCodeView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}