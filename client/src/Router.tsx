import { BrowserRouter, Route, Routes } from "react-router-dom";

// Headers components
import { HeaderCompany } from "./components/company/HeaderCompany";
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Company views components
import IndexView from "./views/company/IndexView";
import RegisterView from "./views/company/users/RegisterView";
import LoginView from "./views/company/users/LoginView";
import ForgotPasswordView from "./views/company/users/ForgotPassword";

// Admin views components
import HomeView from "./views/admin/HomeView";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                {/* Company views */}
                <Route element={<HeaderCompany />}>
                    {/* Index */}
                    <Route index element={<IndexView />} />

                    {/* Users module */}
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
                </Route>

                {/* Admin views */}
                <Route element={<HeaderAdmin />}>
                    <Route path="/admin/home" element={<HomeView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}