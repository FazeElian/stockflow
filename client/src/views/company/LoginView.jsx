// Styles
import "../../assets/scss/components/company/Forms.scss";


import { Link } from 'react-router-dom';

const LoginView = () => {
    return (
        <>
            <section className="bg-content-center">
                <form action="" className="form-users" method="post">
                    <h1>Iniciar Sesión</h1>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingresa tu correo electrónico"
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