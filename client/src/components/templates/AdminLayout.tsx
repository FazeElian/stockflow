import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "sonner";

// Query
import { useGetAuthenticatedUser } from "../../services/auth/quieries"

// Type
import type { User } from "../../lib/types/services/auth/user.type";

// Loader component
import { Loading } from "../atoms/Loading";

// Components for this layout
import { NavBar } from "../organisms/NavBar";
import { SideBar } from "../organisms/SideBar";

const AdminLayout = () => {
    const [sideBar, setSideBar] = useState(false);

    const handleSideBar = () => {
        setSideBar(!sideBar);
    };

    const { data: userResult, isError, isLoading } = useGetAuthenticatedUser()
    const redirect = useNavigate()

    if(isLoading) return <Loading />;
    if(isError) redirect("/auth/login")

    const user = userResult as User

    return (
        <>
            <NavBar
                userName={user.userName}
                handleSideBar={handleSideBar}
            />
            <SideBar
                sideBar={sideBar}
                closeSidebar={() => setSideBar(false)}
            />
            <Toaster position="top-center" richColors />
            <Outlet />
        </>
    )
}

export default AdminLayout