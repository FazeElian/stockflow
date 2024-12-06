import { Link, useNavigate } from "react-router-dom";

// Styles for this view
import "../../assets/css/components/admin/UserDropdown.css";

// Images - icons
    // Profile photo
    import ProfilePhotoExample from "../../assets/img/icons/ProfilePhotoExample.png";

    // Profile
    import ProfileIcon from "../../assets/img/icons/Profile.png";

    // LogOut
    import LogOutIcon from "../../assets/img/icons/LogOut.png";

const UserDropDown = () => {
    const navigate = useNavigate();

    // Log out function
    const logOut = () => {
        // Remove token
        localStorage.removeItem("authToken");

        // Redirection
        navigate("/login");
        alert("Has cerrado sesión con éxito");
    }

    return (
        <div className="user-drop-down bg-gray-dark font-inter">
            <div className="top-user-drop-down bg-transparent">
                <img src={ProfilePhotoExample} className="bg-transparent" alt="" />
                <div className="email-top-user-drop-down bg-transparent">
                    <h2 className="color-white bg-transparent">User real name</h2>
                    <h3 className="color-gray bg-transparent">user_email@gmail.com</h3>
                </div>
            </div>
            <Link to="/admin/home" className="item-user-drop-down bg-transparent color-white">
                <img src={ProfileIcon} className="bg-transparent" alt="" />
                Mi Perfil
            </Link>
            <button
                className="item-user-drop-down item-last-user-drop-down bg-transparent color-white font-inter"
                onClick={logOut}
            >
                <img src={LogOutIcon} className="bg-transparent" alt="" />
                Cerrar Sesión
            </button>
        </div>
    )
}

export { UserDropDown };