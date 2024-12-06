import { Routes, Route } from "react-router-dom";

// Protected route component
import { PrivateRoute } from "./PrivateRoute";

// Base components
import { HeaderAdmin } from "./components/admin/HeaderAdmin";
import { HeaderCompany } from "./components/company/HeaderCompany";

// View components
  // Company views
  import IndexView from "./views/IndexView";
  import PricingView from "./views/company/PricingView";
  import FeaturesView from "./views/company/FeaturesView";

  // Users Module
  import LoginView from './views/company/users/LoginView';
  import RegisterView from './views/company/users/RegisterView';
  import ForgotPasswordView from './views/company/users/ForgotPasswordView';
  import ResetPasswordView from "./views/company/users/ResetPasswordView";

  // Admin views
  // Main view
  import HomeView from "./views/admin/HomeView";
  
  // Products
  import ProductsView from './views/admin/Products/ProductsView';

  // Products Categories
  import CategoriesView from "./views/admin/Categories/CategoriesView";

  // Inventories
  import InventoriesView from "./views/admin/Inventories/InventoriesView";

  // Sales
  import SalesView from "./views/admin/Sales/SalesView";

  // Customers
  import CustomersView from "./views/admin/Customers/CustomersView";

function App() {
  return (
    <>
      <Routes>
        {/* Company views */}
        <Route path="/" element={<HeaderCompany />}>
          <Route index element={<IndexView />} />
          <Route path="/pricing" element={<PricingView />} />
          <Route path="/features" element={<FeaturesView />}/>

          {/* Users module */}
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="forgot-password" element={<ForgotPasswordView />} />
          <Route path="reset-password" element={<ResetPasswordView />} />

          {/* Error 404 */}
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>

        {/* Admin views */}
        <Route 
          path="admin/*"
          element={
            <PrivateRoute>
              <HeaderAdmin />
            </PrivateRoute>
          }
        >
          <Route 
            path="home"
            element={
              <HomeView />
            }
          />
          <Route 
            path="products"
            element={
              <ProductsView />
            }
          />
          <Route 
            path="categories"
            element={
              <CategoriesView />
            }
          />
          <Route 
            path="inventories"
            element={
              <InventoriesView />
            }
          />
          <Route 
            path="sales"
            element={
              <SalesView />
            }
          />
          <Route 
            path="customers"
            element={
              <CustomersView />
            }
          />

          {/* Error 404 */}
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;