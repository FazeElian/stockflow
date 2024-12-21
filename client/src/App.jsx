import { Route, Routes } from "react-router-dom"

// Header component
import { Header } from "./components/admin/Header"

// Views component
import IndexView from "./views/IndexView"
import RegisterView from "./views/company/RegisterView"
import LoginView from "./views/company/LoginView"
import ForgotPasswordView from "./views/company/ForgotPasswordView"
import HomeView from "./views/admin/HomeView"
import ProductsView from "./views/admin/ProductsView"
import { PrivateRoute } from "./PrivateRoute"

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
      </Route>
    </Routes>
  )
}

export default App