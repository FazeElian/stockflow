import { Outlet, useNavigate } from "react-router-dom";

// Components for this layout
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

// Toaster component
import { Toaster } from "sonner";

// API Call
import { getUser } from "../../api/auth";

const HeaderAdmin = () => {
    const navigate = useNavigate()

    const getAuthenticatedUser = async () => {
        const isUserAuthenticated = await getUser()

        if (isUserAuthenticated == null) {
            // Redirection to login page
            navigate("/auth/login")
        }
    }

    getAuthenticatedUser()

    return (
        <>
            <NavBar/>
            <SideBar />
            <Toaster position="bottom-right" richColors />
            <Outlet />
        </>
    )
}

export { HeaderAdmin };