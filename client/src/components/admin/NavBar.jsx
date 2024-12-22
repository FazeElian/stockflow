import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// Styles for this component
import "../../assets/scss/components/admin/NavBar.scss";

// React icons
import { IoMailUnreadOutline, IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";

// Function from API Call
import { getLoggedInUser } from "../../api/admin";

const NavBar = () => {
    const [ user, setUsers ] = useState([]);
    const [ dropdownUser, setDropdownUser ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.log("Token not found");
        }

        getLoggedInUser(token)
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
    }, []);

    const handleDropdownUser = () => {
        setDropdownUser(!dropdownUser)
    }

    // Redirection
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("authToken");
        navigate("/auth/login/");
        alert("Has cerrado sesión con éxito");
    }
    
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
                <button className="btn-user-nav-bar btn-profile-nav-bar" onClick={handleDropdownUser}>
                    <FaUserCircle />
                    <h2>{user.name}</h2>
                    <RiArrowDropDownLine />
                </button>

                {/* Dropdown */}
                <div className={ `dropdown-user ${dropdownUser ? "active" : ""}` }>
                    <div className="top-dropdown">
                        {user.profilePhoto ? (
                            <img src={user.profilePhoto} alt="Profile" />
                        ) : (
                            <FaUserCircle />
                        )}

                        <h2>{user.name}</h2>
                    </div>
                    <nav className="nav-dropdown">
                        <Link className="item-nav-dropdown">
                            <LuUserRound />
                            Perfil
                        </Link>
                        <Link className="item-nav-dropdown">
                            <FiHelpCircle />
                            Ayuda
                        </Link>
                        <button className="item-nav-dropdown" onClick={logOut}>
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