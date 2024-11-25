import { Link } from 'react-router-dom';

// Styles for this view
import "../../../assets/css/views/users/Forms.css";

// Images - icons
    // Logo
    import Logo from "../../../assets/img/Logo.png";

const LoginView = () => {
    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="post">
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