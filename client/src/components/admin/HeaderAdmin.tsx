import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Components for this layout
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

// Toaster component
import { Toaster } from "sonner";

// API Call
import { getUser } from "../../api/auth";

// Loader component
import { Loading } from "../Loading";

const HeaderAdmin = () => {
    const { data: user, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ["user"],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    const navigate = useNavigate();

    if (isLoading) return <Loading />;
    if (isError) {
        navigate("/auth/login");
    }

    if (user) {
        return (
            <>
                <NavBar
                    profilePhoto={user.profilePhoto}
                    userName={user.userName}
                />
                <SideBar />
                <Toaster position="bottom-right" richColors />
                <Outlet />
            </>
        )
    } else {
        navigate("/auth/login");
    }
}

export { HeaderAdmin };