import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Company views
const HomeView = lazy(() => import("./views/company/HomeView"))
const RegisterView = lazy(() => import("./views/company/auth/RegisterView"))
const LoginView = lazy(() => import("./views/company/auth/LoginView"))
const ConfirmAccountView = lazy(() => import("./views/company/auth/ConfirmAccountView"))
const ForgotPasswordView = lazy(() => import("./views/company/auth/ForgotPasswordView"))
const ResetPasswordView = lazy(() => import("./views/company/auth/ResetPaswordView"))
const ValidateCodeView = lazy(() => import("./views/company/auth/ValidateTokenView"))

// Header admin side component
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Admin views
const DashboardView = lazy(() => import("./views/admin/DashboardView"))

// Products
const ProductsView = lazy(() => import("./views/admin/products/ProductsView"))
const NewProductView = lazy(() => import("./views/admin/products/NewProductView"))

// Categories
const CategoriesView = lazy(() => import("./views/admin/categories/CategoriesView"))
const NewCategoryView = lazy(() => import("./views/admin/categories/NewCategoryView"))
const EditCategoryView = lazy(() => import("./views/admin/categories/EditCategoryView"))

const InvoicesView = lazy(() => import("./views/admin/invoices/InvoicesView"));
const SalesView = lazy(() => import("./views/admin/sales/SalesView"));
const CustomersView = lazy(() => import("./views/admin/customers/CustomersView"));
const ProfileView = lazy(() => import("./views/admin/profile/ProfileView"));

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

              {/* Products */}
              <Route path="products" element={<ProductsView />} />
              <Route path="products/new" element={<NewProductView />} />

              {/* Categories */}
              <Route path="categories" element={<CategoriesView />} />
              <Route path="categories/new" element={<NewCategoryView />} />
              <Route path="categories/edit/:id" element={<EditCategoryView />} />
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