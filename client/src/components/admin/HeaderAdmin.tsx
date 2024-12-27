import { Outlet } from "react-router-dom";

const HeaderAdmin = () => {
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