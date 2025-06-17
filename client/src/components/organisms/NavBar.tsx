import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// Styles for this component
import "../../assets/css/components/admin/NavBar.css";

// React icons
import { IoMailUnreadOutline, IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";

interface NavBarProps {
    userName: string;
    handleSideBar: () => void;
}

const NavBar = ({ userName, handleSideBar } : NavBarProps) => {
    const [ dropdownUser, setDropdownUser ] = useState(false);

    const handleDropdownUser = () => {
        setDropdownUser(!dropdownUser)
    }

    // Redirection
    const redirect = useNavigate()

    // Log out
    const LogOut = () => {
        localStorage.removeItem("AUTH_TOKEN");
        redirect("/auth/login/");
    }

    return (
        <nav className="nav-bar">
            <div className="cont-btn-menu">
                <button className="btn-menu" onClick={handleSideBar}>
                    <IoMenuSharp />
                </button>
            </div>
            <div className="cont-btns-user">
                <button className="btn-user-nav-bar font-inter">
                    <IoMailUnreadOutline />
                    <h2 className="font-inter">Mensajes</h2>
                </button>
                <button className="btn-user-nav-bar font-inter btn-profile-nav-bar" onClick={handleDropdownUser}>
                    <FaUserCircle />
                    <h2 className="font-inter">{userName}</h2>
                    <RiArrowDropDownLine />
                </button>

                {/* Dropdown */}
                <div className={ `dropdown-user font-inter ${dropdownUser ? "active" : ""}` }>
                    <div className="top-dropdown">
                        <FaUserCircle />
                        <h2>{userName}</h2>
                    </div>
                    <nav className="nav-dropdown">
                        <Link to="/admin/profile" className="item-nav-dropdown" onClick={() => setDropdownUser(false)}>
                            <LuUserRound />
                            Perfil
                        </Link>
                        <Link to="" className="item-nav-dropdown" onClick={() => setDropdownUser(false)}>
                            <FiHelpCircle />
                            Ayuda
                        </Link>
                        <button className="item-nav-dropdown font-inter" onClick={LogOut}>
                            <MdLogout />
                            Cerrar Sesión
                        </button>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export { NavBar };