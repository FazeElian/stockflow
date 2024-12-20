const ForgotPasswordView = () => {
    return (
        <>
            <section className="bg-content-center">
                <form action="" className="form-users" method="post">
                    <h1>Recuperar Contraseña</h1>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingresa el correo asociado a tu cuenta"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Enviar código
                    </button>
                </form>
            </section>
        </>
    )
}

export default ForgotPasswordView