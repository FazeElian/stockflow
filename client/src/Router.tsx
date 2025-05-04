import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

// Company views
import HomeView from "./views/company/HomeView";
import RegisterView from "./views/company/auth/RegisterView";
import LoginView from "./views/company/auth/LoginView";
import ConfirmAccountView from "./views/company/auth/ConfirmAccountView";
import ForgotPasswordView from "./views/company/auth/ForgotPasswordView";
import ResetPasswordView from "./views/company/auth/ResetPaswordView";
import ValidateCodeView from "./views/company/auth/ValidateTokenView";

// Header admin side component
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Admin views
import DashboardView from "./views/admin/DashboardView";
import ProductsView from "./views/admin/products/ProductsView";
import CategoriesView from "./views/admin/categories/CategoriesView";
import NewCategoryView from "./views/admin/categories/NewCategoryView";

import InvoicesView from "./views/admin/invoices/InvoicesView";
import SalesView from "./views/admin/sales/SalesView";
import CustomersView from "./views/admin/customers/CustomersView";
import ProfileView from "./views/admin/profile/ProfileView";

// Loading component
import { Loading } from "./components/Loading";

export default function Router () {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Company */}
            <Route index element={<HomeView />} />

            {/* Users */}
            <Route path="/auth/register" element={<RegisterView />} />
            <Route path="/auth/login" element={<LoginView />} />
            <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
            <Route path="/auth/reset-password/:token" element={<ResetPasswordView />} />
            <Route path="/auth/validate-token" element={<ValidateCodeView />} />

            {/* Admin */}
            <Route path="/admin/*" element={<HeaderAdmin />}>
              <Route path="dashboard" element={<DashboardView />} />
              <Route path="products" element={<ProductsView />} />
              <Route path="categories" element={<CategoriesView />} />
              <Route path="categories/new" element={<NewCategoryView />} />
              <Route path="invoices" element={<InvoicesView />} />
              <Route path="sales" element={<SalesView />} />
              <Route path="customers" element={<CustomersView />} />
              <Route path="profile" element={<ProfileView />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}