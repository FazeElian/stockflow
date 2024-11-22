import { Outlet, Link } from "react-router-dom";

const HeaderCompany = () => {
    return (
        <>
            <header>
                <h1>Header Company</h1>
                <nav>
                    <li><Link to="/login">Login View</Link></li>
                    <li><Link to="/register">Register View</Link></li>
                    <li><Link to="/forgot-password">Forgot Password View</Link></li>
                    <li><Link to="/reset-password">Reset Password View</Link></li>

                    <br />
                    <li><Link to="/admin/home">Admin Home View</Link></li>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { HeaderCompany }; 