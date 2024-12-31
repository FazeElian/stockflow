import { Outlet } from "react-router-dom";

// Tanstack
import { useQuery } from "@tanstack/react-query"

// Function from API
import { getUser } from "../../api/StockFlowAPI";

// Redirection
import { useNavigate } from "react-router-dom";

// Components for this layout
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

const HeaderAdmin = () => {
    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ["user"],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    const navigate = useNavigate();

    if (isLoading) return "Cargando";
    if (isError) {
        navigate("/auth/login");
    }

    if (data) {
        return (
            <>
                <NavBar
                    userName={data.userName}
                    profilePhoto={data.profilePhoto}
                />
                <SideBar />
                <Outlet />
            </>
        )
    }
}

export { HeaderAdmin };