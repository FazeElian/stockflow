import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

const Header = () => {
    return (
        <>
            <NavBar />
            <SideBar />

            <br />
            <Outlet />
        </>
    )
}

export { Header };