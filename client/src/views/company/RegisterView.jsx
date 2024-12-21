import { useState } from "react"
import { Link } from "react-router-dom"
import { Register } from "../../api/users";

const RegisterView = () => {
    const [ data, setData ] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Register(data);
            console.log("Resultado: ", response.message);
        } catch (error) {
            console.error("Error al registrarse", error);
        }
    } 

    return (
        <>
            <section className="bg-content-center">
                <form action="" className="form-users" method="post" onSubmit={handleSubmit}>
                    <h1>Registrarse</h1>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ingresa tu nombre completo"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingresa tu correo electrónico"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Crea una contraseña (Mínimo 8 caracteres)"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Registrarme
                    </button>
                    <Link to="/auth/login">Ya tienes una cuenta? Iniciar Sesión</Link>
                </form>
            </section>
        </>
    )
}

export default RegisterView