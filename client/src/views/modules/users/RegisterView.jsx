// React hooks
import { useState } from 'react';

// Register function from api controller
import { Register } from './../../../api/auth';

import { Link, useNavigate } from 'react-router-dom';

// Styles for this view
import "../../../assets/css/views/users/Forms.css";

// Images - icons
    // Logo
    import Logo from "../../../assets/img/Logo.png";

const RegisterView = () => {
    const [ data, setData ] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value });
    }

    // Redirect
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // Avoid that the form submit auto
        e.preventDefault()

        try {
            const response = await Register(data);
            alert("Te has registrado con éxito");

            // Redirection 
            navigate("/login");
        } catch (error) {
            alert("Error al registrarse" + error);
        }
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="post" onSubmit={handleSubmit}>
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Completa el formulario para crear tu cuenta</h2>
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
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="name" className="bg-transparent color-white">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu nombre completo"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Crea una contraseña (mínimo 8 caracteres)"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Crear mi cuenta
                            </button>

                            <Link to="/login" className="color-white bg-transparent">Ya tienes una cuenta? Iniciar Sesión</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterView;