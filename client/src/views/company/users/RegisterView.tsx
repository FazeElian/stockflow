import { Link } from "react-router-dom"

// Styles for this view
import "../../../assets/css/views/company/users/Form.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

const RegisterView = () => {
    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="POST">
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
                                    required
                                />
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Crear mi cuenta
                            </button>

                            <Link to="/auth/login" className="color-white bg-transparent">Ya tienes una cuenta? Iniciar Sesión</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterView