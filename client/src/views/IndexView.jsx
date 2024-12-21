import { Link } from "react-router-dom"

const IndexView = () => {
    return (
        <div style={{ padding: "3rem" }}>
            <h1 style={{ fontWeight: "500" }}>Vista Principal</h1>
            <Link to="/auth/login">Iniciar Sesión</Link>
            <br />
            <Link to="/auth/register">Registrarse</Link>
        </div>
    )
}

export default IndexView