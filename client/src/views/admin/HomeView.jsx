import { useNavigate } from "react-router-dom";

const HomeView = () => {
    // Redirection
    const navigate = useNavigate();
    
    const logOut = () => {
        localStorage.removeItem("authToken");
        navigate("/auth/login/");
        alert("Has cerrado sesión con éxito");
    }
    
    return (
        <div>
            HomeView
            <br />
            <button onClick={logOut}>
                Cerrar Sesión
            </button>
        </div>
    )
}

export default HomeView