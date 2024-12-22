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
        <main className="content-page" style={{ color: "white" }}>
            <br /><br />
            <h2>Home View</h2>
            <br />
            <button onClick={logOut} style={{ width: "200px" }}>
                Cerrar Sesión
            </button>
        </main>
    )
}

export default HomeView