import { Outlet, useNavigate } from "react-router-dom";

// Query
import { useGetAuthenticatedUser } from "../../services/auth/quieries"

// Type
import type { User } from "../../lib/types/services/auth/user.type";

// Loader component
import { Loading } from "../atoms/Loading";

const AdminLayout = () => {
    const { data: userResult, isError, isLoading } = useGetAuthenticatedUser()
    const redirect = useNavigate()

    if(isLoading) return <Loading />;
    if(isError) redirect("/auth/login")

    const user = userResult as User

    return (
        <>
            <header>
                <h1>Admin Layout</h1>
                <h2>{user.userName}</h2>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout