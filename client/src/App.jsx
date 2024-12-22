import { Route, Routes } from "react-router-dom"

// Header component
import { Header } from "./components/admin/Header"

// Protected route component
import { PrivateRoute } from "./PrivateRoute"

// Views component
// Company views
import IndexView from "./views/IndexView"
import RegisterView from "./views/company/RegisterView"
import LoginView from "./views/company/LoginView"
import ForgotPasswordView from "./views/company/ForgotPasswordView"

// Admin views
import HomeView from "./views/admin/HomeView"
import ProductsView from "./views/admin/products/ProductsView"
import CategoriesView from "./views/admin/categories/CategoriesView"
import InventoriesView from './views/admin/inventories/InventoriesView';
import SalesView from './views/admin/sales/SalesView';
import CustomersView from "./views/admin/customers/CustomersView"

  // Not found
  import NotFound from "./components/admin/NotFound"

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={<IndexView />}
      />
      <Route path="auth/*">
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="forgot-password" element={<ForgotPasswordView />} />
      </Route>
      <Route
        path="admin/*"
        element={
          <PrivateRoute>
            <Header />
          </PrivateRoute>
        }
      >
        <Route
          path="home"
          index
          element={<HomeView />}
        />
        <Route
          path="products"
          element={<ProductsView />}
        />
        <Route
          path="categories"
          element={<CategoriesView />}
        />
        <Route
          path="inventories"
          element={<InventoriesView />}
        />
        <Route
          path="sales"
          element={<SalesView />}
        />
        <Route
          path="customers"
          element={<CustomersView />}
        />

        {/* Error 404 */}
        <Route
          path="*"
          element={
            <NotFound
              btnText="Volver al Dashboard"
              btnLink="/admin/home"
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App