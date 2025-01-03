import { BrowserRouter, Route, Routes } from "react-router-dom";

// Headers components
import { HeaderCompany } from "./components/company/HeaderCompany";
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Company views components
import IndexView from "./views/company/IndexView";

// Users module
import RegisterView from "./views/company/users/RegisterView";
import LoginView from "./views/company/users/LoginView";
import ForgotPasswordView from "./views/company/users/ForgotPassword";

// Admin views components
import HomeView from "./views/admin/HomeView";
import ProductsView from "./views/admin/products/ProductsView";

// Categories module
import CategoriesView from "./views/admin/categories/CategoriesView";
import NewCategoryView from "./views/admin/categories/NewCategoryView";
import EditCategoryView from "./views/admin/categories/EditCategoryView";

import InvoicesView from "./views/admin/invoices/InvoicesView";
import SalesView from "./views/admin/sales/SalesView";

// Customers module
import CustomersView from "./views/admin/customers/CustomersView";
import NewCustomerView from "./views/admin/customers/NewCustomerView";

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
                    <Route path="/admin/products" element={<ProductsView />} />

                    {/* Categories */}
                    <Route path="/admin/categories" element={<CategoriesView />} />
                    <Route path="/admin/categories/new" element={<NewCategoryView />} />
                    <Route path="/admin/categories/edit/:_id" element={<EditCategoryView />} />

                    <Route path="/admin/invoices" element={<InvoicesView />} />
                    <Route path="/admin/sales" element={<SalesView />} />

                    {/* Customers */}
                    <Route path="/admin/customers" element={<CustomersView />} />
                    <Route path="/admin/customers/new" element={<NewCustomerView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}