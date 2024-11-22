import { Routes, Route } from "react-router-dom";

// Base components
import { HeaderAdmin } from "./views/components/HeaderAdmin";
import { HeaderCompany } from "./views/components/HeaderCompany";

// View components
import IndexView from "./views/IndexView";

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

          {/* Users module */}
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="forgot-password" element={<ForgotPasswordView />} />
          <Route path="reset-password" element={<ResetPasswordView />} />

          {/* Error 404 */}
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>

        {/* Admin views */}
        <Route path="admin/*" element={<HeaderAdmin />}>
          <Route path="home" element={<HomeView />} />

          {/* Error 404 */}
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;