import { useForm } from "react-hook-form"
import { Toaster } from "sonner";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { ValidateCodeForm } from "../../lib/types/services/auth/user.type"

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

// Mutation
import { useValidateCodeMutation } from "../../services/auth/mutations";
import { useNavigate } from "react-router-dom";

const ValidateCodeView = () => {
    // Redirection
    const redirect = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<ValidateCodeForm> ({
        defaultValues: {
            code: undefined,
        }
    })

    const validateCodeMutation = useValidateCodeMutation()
    const handleValidateCode = async (formData: ValidateCodeForm) => {
        validateCodeMutation.mutate(formData, {
            onSuccess: () => {
                redirect(`/auth/reset-password/${formData.code}`)
            }
        });
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form
                        action=""
                        className="form-users bg-black-medium font-inter"
                        method="post"
                        onSubmit={handleSubmit(handleValidateCode)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Introduce el código enviado a tu correo electrónico para restablecer tu contraseña
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <AuthInputField
                                type="text"
                                error={errors.code}
                                label="Código"
                                labelFor="code"
                                placeholder="Introduce el código enviado a tu correo electrónico"
                                {...register("code", {
                                    required: "Código no válido",
                                    minLength: {
                                        value: 6,
                                        message: "Código no válido"
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: "Código no válido"
                                    }
                                })}
                            />

                            <AuthSubmitButton text="Reestablecer contraseña" />
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

export default ValidateCodeView