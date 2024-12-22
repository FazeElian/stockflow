// Styles for this component
import "../../assets/scss/components/admin/NavBar.scss";

// React icons
import { IoMailUnreadOutline, IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="cont-btn-menu">
                <button className="btn-menu">
                    <IoMenuSharp />
                </button>
            </div>
            <div className="cont-btns-user">
                <button className="btn-user-nav-bar">
                    <IoMailUnreadOutline />
                    <h2>Mensajes</h2>
                </button>
                <button className="btn-user-nav-bar btn-profile-nav-bar">
                    <FaUserCircle />
                    <h2>Nombre Usuario</h2>
                    <RiArrowDropDownLine />
                </button>
            </div>
        </nav>
    )
}

export { NavBar };