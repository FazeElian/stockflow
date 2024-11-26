// React hooks
import { useState } from 'react';

// Redirection
import { useNavigate } from 'react-router-dom';

// Login function from api controller
import { Login } from './../../../api/auth';

import { Link } from 'react-router-dom';

// Styles for this view
import "../../../assets/css/views/users/Forms.css";

// Images - icons
    // Logo
    import Logo from "../../../assets/img/Logo.png";

const LoginView = () => {
    const [ data, setData ] = useState({
        email: "",
        password: "",
    });

    // Auth token states
    const [ token, setToken ] = useState(null);

    const handleChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value });
    }

    // For redirect
    const navigate = useNavigate(null);

    const handleSubmit = async (e) => {
        // Avoid that the form submit auto
        e.preventDefault()

        try {
            const response = await Login(data);
            alert("Has iniciado sesión con éxito");

            // Redirection
            navigate("/admin/home");

            // Save token
            setToken(response.token);
            localStorage.setItem("authToken", response.token);
        } catch (error) {
            alert("Error al iniciar sesión: " + error.message);
        }
    }    

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="post" onSubmit={handleSubmit}>
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Ingresa tus credenciales para acceder a tu cuenta</h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu correo electrónico"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu contraseña"
                                    onChange={handleChange}
                                    required
                                />
                                <Link to="/forgot-password" className="color-white bg-transparent">Olvidaste tu contraseña?</Link>
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Iniciar Sesión
                            </button>

                            <Link to="/register" className="color-white bg-transparent">No tienes una cuenta? Registrarse</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default LoginView;