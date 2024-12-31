import { BrowserRouter, Route, Routes } from "react-router-dom";

// Headers components
import { HeaderCompany } from "./components/company/HeaderCompany";
import { HeaderAdmin } from "./components/admin/HeaderAdmin";

// Company views components
import IndexView from "./views/company/IndexView";
import ChooseYourPlanView from "./views/company/ChooseYourPlanView";

// Users module
import RegisterView from "./views/company/users/RegisterView";
import LoginView from "./views/company/users/LoginView";
import ForgotPasswordView from "./views/company/users/ForgotPassword";

// Admin views components
import HomeView from "./views/admin/HomeView";
import ProductsView from "./views/admin/products/ProductsView";
import CategoriesView from "./views/admin/categories/CategoriesView";
import InventoriesView from "./views/admin/inventories/InventoriesView";
import InvoicesView from "./views/admin/invoices/InvoicesView";
import SalesView from "./views/admin/sales/SalesView";
import CustomersView from "./views/admin/customers/CustomersView";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                {/* Company views */}
                <Route element={<HeaderCompany />}>
                    {/* Index */}
                    <Route index element={<IndexView />} />
                    
                    <Route path="/plans" element={<ChooseYourPlanView />} />

                    {/* Users module */}
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
                </Route>

                {/* Admin views */}
                <Route element={<HeaderAdmin />}>
                    <Route path="/admin/home" element={<HomeView />} />
                    <Route path="/admin/products" element={<ProductsView />} />
                    <Route path="/admin/categories" element={<CategoriesView />} />
                    <Route path="/admin/inventories" element={<InventoriesView />} />
                    <Route path="/admin/invoices" element={<InvoicesView />} />
                    <Route path="/admin/sales" element={<SalesView />} />
                    <Route path="/admin/customers" element={<CustomersView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}