import { Outlet } from "react-router-dom";

// Tanstack
import { useQuery } from "@tanstack/react-query"

// Function from API
import { getUser } from "../../api/StockFlowAPI";

const HeaderAdmin = () => {
    const { data, isLoading, error, isError } = useQuery({
        queryFn: getUser,
        queryKey: ["user"],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    console.log(data);
    console.log(isLoading);
    console.log(isError);
    console.log(error?.message)
    
    return (
        <>
            <nav>
                <h1>Header Admin side</h1>
            </nav>

            <Outlet />
        </>
    )
}

export { HeaderAdmin };