// Styles for this view
import "../../../assets/css/views/company/users/Form.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// React hook form
import { useForm } from "react-hook-form";

// Error message component
import ErrorMessageValidation from '../../../components/company/users/ErrorMessageValidation';

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const ForgotPasswordView = () => {
    // Title
    useDocumentTitle("Recuperar contraseña")

    const initialValues = {
        email: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues
    });

    const handleForgotPassword = () => {
        console.log("Desde handle forgot password");
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="post" onSubmit={handleSubmit(handleForgotPassword)}>
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Solicita un código a tu correo electrónico para restablecer tu contraseña.</h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Introduce el correo asociado a tu cuenta"
                                    {...register("email", {
                                        required: "Debes añadir el correo asociado a tu cuenta",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Correo electrónico no válido",
                                        },
                                    })}
                                />
                                {errors.email && 
                                    <ErrorMessageValidation>
                                        {errors.email?.message}
                                    </ErrorMessageValidation>
                                }
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

export default ForgotPasswordView