import { Outlet } from "react-router-dom";

const HeaderCompany = () => {
    return (
        <>
            <nav>
                <h1>Header company side</h1>
            </nav>

            <Outlet />
        </>
    )
}

export { HeaderCompany };