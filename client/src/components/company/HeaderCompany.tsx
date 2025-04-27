import { Outlet } from "react-router-dom"

const HeaderCompany = () => {
    return (
        <>
            <header>
                <h1>Header company</h1>
            </header>

            <Outlet />
        </>
    )
}

export default HeaderCompany