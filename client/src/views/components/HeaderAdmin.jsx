import { Outlet, Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <>
            <header>
                <h1>Header Admin</h1>
                <nav>
                    <li><Link to="/">Come back to index view</Link></li>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { HeaderAdmin }; 