import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/scss/components/admin/SideBar.scss";

// Images - icons
import Logo from "../../assets/img/Logo.png";

// React icons
import { MdOutlineDashboard, MdOutlineInventory } from "react-icons/md";
import { BiShoppingBag, BiCategory } from "react-icons/bi";
import { TbCashRegister } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";

const SideBar = () => {
    return (
        <aside className="side-bar">
            <div className="top-side-bar">
                <img src={Logo} alt="" />
            </div>
            <nav className="nav-side-bar">
                <Link to="/admin/home" className="item-nav-side-bar item-selected-nav-side-bar">
                    <MdOutlineDashboard />
                    <h2>Panel Principal</h2>
                </Link>
                <Link to="/admin/products" className="item-nav-side-bar">
                    <BiShoppingBag />
                    <h2>Productos</h2>
                </Link>
                <Link to="/admin/products" className="item-nav-side-bar">
                    <BiCategory />
                    <h2>Categorías</h2>
                </Link>
                <Link to="/admin/products" className="item-nav-side-bar">
                    <MdOutlineInventory />
                    <h2>Inventarios</h2>
                </Link>
                <Link to="/admin/products" className="item-nav-side-bar">
                    <TbCashRegister />
                    <h2>Ventas</h2>
                </Link>
                <Link to="/admin/products" className="item-nav-side-bar">
                    <IoPeopleOutline />
                    <h2>Clientes</h2>
                </Link>
            </nav>
        </aside>
    )
}

export { SideBar };