import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

// Styles
import "../../assets/scss/components/company/Forms.scss";
import { Login } from '../../api/users';

const LoginView = () => {
    const [ data, setData ] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value });
    }

    // Redirection
    const navigate = useNavigate();

    // Auth tokens
    const [ token, setToken ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Login(data);
            
            // Save token
            setToken(response.token);
            localStorage.setItem("authToken", response.token);

            // Redirection with alert
            alert("Has iniciado sesión con éxito");
            navigate("/admin/home");
            
            console.log("Resultado: ", response.message);
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    }

    return (
        <>
            <section className="bg-content-center">
                <form action="" className="form-users" method="post" onSubmit={handleSubmit}>
                    <h1>Iniciar Sesión</h1>
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
                            placeholder="Ingresa tu contraseña"
                            onChange={handleChange}
                            required
                        />
                        <Link to="/auth/forgot-password">Olvidaste tu contraseña?</Link>
                    </div>
                    <button type="submit" className="btn-submit">
                        Iniciar Sesión
                    </button>
                    <Link to="/auth/register">No tienes una cuenta? Registrarse</Link>
                </form>
            </section>
        </>
    )
}

export default LoginView