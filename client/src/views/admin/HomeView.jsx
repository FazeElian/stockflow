// Redirection
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
        alert("Has cerrado sesión con éxito");
    }

    return (
        <>            
            <main className="content-page--admin">
                <div className="font-inter" style={{ paddingTop: '2rem' }}>
                    <h1 className="color-white bg-transparent">Bienvenido Administrador !</h1>
                    <br />
                    <button
                        onClick={logOut}
                        className="color-white bg-black-light font-inter"
                        style={{ padding: "14px 2rem 14px", border: "1px solid white", cursor:"pointer", borderRadius: "10px", fontSize: "15px" }}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </main>
        </>
    )
}

export default HomeView;