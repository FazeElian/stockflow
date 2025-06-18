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

// Products module views
import ProductsView from "./views/admin/products/ProductsView";
import NewProductView from "./views/admin/products/NewProductView";
import EditProductView from "./views/admin/products/EditProductView";

import CategoriesView from "./views/admin/categories/CategoriesView";
import InvoicesView from "./views/admin/invoices/InvoicesView";
import SalesView from "./views/admin/sales/SalesView";
import CustomersView from "./views/admin/customers/CustomersView";

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

                        {/* Products */}
                        <Route path="products" element={<ProductsView />} />
                        <Route path="products/new" element={<NewProductView />} />
                        <Route path="products/edit/:id" element={<EditProductView />} />

                        <Route path="categories" element={<CategoriesView />} />
                        <Route path="invoices" element={<InvoicesView />} />
                        <Route path="sales" element={<SalesView />} />
                        <Route path="customers" element={<CustomersView />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}