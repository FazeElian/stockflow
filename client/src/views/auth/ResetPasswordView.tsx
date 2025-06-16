import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Toaster } from "sonner";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { ResetPasswordForm } from "../../lib/types/services/auth/user.type"

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

const ResetPasswordView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordForm> ({
        defaultValues: {
            password: "",
        }
    })

    const { token } = useParams<{ token: string }>();
    const tokenNumber = token ? Number(token) : NaN;
    console.log(tokenNumber)

    const handleResetPassword = async (formData: ResetPasswordForm) => {
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
                        onSubmit={handleSubmit(handleResetPassword)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Crea una nueva contraseña
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <AuthInputField
                                type="password"
                                error={errors.password}
                                label="Nueva contraseña"
                                labelFor="password"
                                placeholder="Crea una nueva contraseña (al menos 8 caracteres)."
                                {...register("password", {
                                    required: "Debes ingresar una contraseña.",
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener al menos 8 caracteres."
                                    }
                                })}
                            />

                            <AuthSubmitButton text="Restablecer contraseña" />
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

export default ResetPasswordView