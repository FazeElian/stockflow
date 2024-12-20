import { Link } from "react-router-dom"

const RegisterView = () => {
    return (
        <>
            <section className="bg-content-center">
                <form action="" className="form-users" method="post">
                    <h1>Registrarse</h1>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ingresa tu nombre completo"
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