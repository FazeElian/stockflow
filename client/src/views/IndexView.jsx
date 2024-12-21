import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const IndexView = () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/api/users").then (
            response => response.json()
        ).then(
            data => {
                setData(data);
            }
        )
    }, [])

    return (
        <div style={{ padding: "3rem" }}>
            <h1 style={{ fontWeight: "500" }}>Vista Principal</h1>
            <Link to="/auth/login">Iniciar Sesión</Link>
            <br />
            <Link to="/auth/register">Registrarse</Link>

            <br />
            <br />
            <h1 style={{ fontWeight: "500" }}>Usuarios en base de datos:</h1>
            {data.users.map((user) => (
                <div key={user.id}>
                    <b>Id Usuario: </b>{user.id}
                    <br />
                    <b>Correo: </b>{user.email}
                    <br />
                    <b>Nombre: </b>{user.name}
                    <br /><br />
                </div>
            ))}
        </div>
    )
}

export default IndexView