// Styles for this view
import "../../../assets/css/views/users/Forms.css";

// Images - icons
    // Logo
    import Logo from "../../../assets/img/Logo.png";

const ForgotPasswordView = () => {
    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="post">
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Solicita un código a tu correo electrónico para restablecer tu contraseña.</h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    required
                                />
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Enviar código de recuperación
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ForgotPasswordView;