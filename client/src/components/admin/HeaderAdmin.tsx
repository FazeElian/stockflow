import { Outlet } from "react-router-dom";

// Tanstack
import { useQuery } from "@tanstack/react-query"

// Function from API
import { getUser } from "../../api/StockFlowAPI";

// Redirection
import { useNavigate } from "react-router-dom";

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

    if (data) return (
        <>
            <nav style={{ color: "white" }}>
                <h1>Header Admin side</h1>
                <br />

                <h2>Bienvenido {data.userName}!</h2>
            </nav>

            <Outlet />
        </>
    )
}

export { HeaderAdmin };