import { Link, useLocation } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/SideBar.css";

// Images - icons
import Logo from "../../assets/img/Logo.webp";

// React icons
import { MdOutlineDashboard } from "react-icons/md";
import { BiShoppingBag, BiCategory } from "react-icons/bi";
import { TbCashRegister } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";

interface SideBarProps {
    sideBar: boolean;
    closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ sideBar, closeSidebar }) => {
    const location = useLocation();

    return (
        <aside className={` font-inter side-bar ${sideBar ? "active": ""} `}>
            <div className="top-side-bar">
                <img src={Logo} alt="" />
            </div>
            <nav className={ `nav-side-bar ${sideBar ? "active": ""}`}>
                <Link
                    onClick={closeSidebar}
                    to="/admin/dashboard"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/dashboard" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <MdOutlineDashboard />
                    <h2>Panel Principal</h2>
                </Link>
                <Link
                    onClick={closeSidebar}
                    to="/admin/products"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/products" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <BiShoppingBag />
                    <h2>Productos</h2>
                </Link>
                <Link
                    onClick={closeSidebar}
                    to="/admin/categories"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/categories" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <BiCategory />
                    <h2>Categorías</h2>
                </Link>
                <Link
                    onClick={closeSidebar}
                    to="/admin/invoices"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/invoices" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <LiaFileInvoiceSolid />
                    <h2>Facturas</h2>
                </Link>
                <Link
                    onClick={closeSidebar}
                    to="/admin/sales"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/sales" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <TbCashRegister />
                    <h2>Ventas</h2>
                </Link>
                <Link
                    onClick={closeSidebar}
                    to="/admin/customers"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/customers" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <IoPeopleOutline />
                    <h2>Clientes</h2>
                </Link>
            </nav>
        </aside>
    )
}

export { SideBar };