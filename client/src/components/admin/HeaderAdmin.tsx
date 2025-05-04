import { Outlet } from "react-router-dom";

// Components for this layout
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

// Toaster component
import { Toaster } from "sonner";

const HeaderAdmin = () => {
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