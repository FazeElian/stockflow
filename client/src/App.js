import { Routes, Route } from "react-router-dom";

// Protected route component
import { PrivateRoute } from "./PrivateRoute";

// Base components
import { HeaderAdmin } from "./components/HeaderAdmin";
import { HeaderCompany } from "./components/HeaderCompany";

// View components
  // Company views
  import IndexView from "./views/IndexView";
  import PricingView from "./views/modules/company/PricingView";

  // Users Module
  import LoginView from './views/modules/users/LoginView';
  import RegisterView from './views/modules/users/RegisterView';
  import ForgotPasswordView from './views/modules/users/ForgotPasswordView';
  import ResetPasswordView from "./views/modules/users/ResetPasswordView";

  // Admin views
  // Main view
  import HomeView from "./views/modules/HomeView";

function App() {
  return (
    <>
      <Routes>
        {/* Company views */}
        <Route path="/" element={<HeaderCompany />}>
          <Route index element={<IndexView />} />
          <Route path="/pricing" element={<PricingView />} />

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

          {/* Error 404 */}
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;