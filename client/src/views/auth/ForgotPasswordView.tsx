import { useForm } from "react-hook-form"
import { Toaster } from "sonner";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { ForgotPasswordForm } from "../../lib/types/services/auth/user.type"

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

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
                            <AuthInputField
                                type="email"
                                label="Correo Electrónico"
                                labelFor="email"
                                placeholder="Ingresa el correo electrónico asociado a tu cuenta"
                                error={errors.email}
                                {...register("email", {
                                    required: "El correo electrónico es obligatorio",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Por favor, ingresa un correo electrónico válido"
                                    }
                                })}
                            />

                            <AuthSubmitButton text="Enviar código de recuperación" />
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

export default ForgotPasswordView