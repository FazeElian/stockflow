import { useForm } from "react-hook-form";
import { Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ForgotPasswordForm } from "../../../types/auth";

const ForgotPasswordView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm> ({
        defaultValues: {
            email: "",
        }
    })

    const handleForgotPassword = async (formData: ForgotPasswordForm) => {
        console.log(formData)
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form
                        action=""
                        className="form-users bg-black-medium font-inter"
                        method="post"
                        onSubmit={handleSubmit(handleForgotPassword)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Solicita un código a tu correo electrónico para restablecer tu contraseña.
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa el correo electrónico asociado a tu cuenta"
                                    {...register("email", {
                                        required: "El correo electrónico es obligatorio",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Por favor, ingresa un correo electrónico válido"
                                        }
                                    })}
                                />
                                {errors.email && 
                                    <ErrorMessageValidation>
                                        { errors.email?.message }
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

            <Toaster
                richColors
                position="top-center"
            />
        </>
    )
}

export default ForgotPasswordView;