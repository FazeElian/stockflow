import { Toaster } from "sonner"
import { useForm } from "react-hook-form";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { ConfirmAccountForm} from "../../lib/types/services/auth/user.type"

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

const ConfirmAccountView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ConfirmAccountForm> ({
        defaultValues: {
            code: undefined
        }
    })

    const handleConfirmAccount = async (formData: ConfirmAccountForm) => {
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
                        onSubmit={handleSubmit(handleConfirmAccount)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Confirme su cuenta utilizando el código enviado a su correo electrónico
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <AuthInputField
                                type="text"
                                error={errors.code}
                                label="Código de Confirmación"
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

                            <AuthSubmitButton text="Confirmar Cuenta" />
                        </div>
                    </form>
                </section>
            </main>

            <Toaster
                richColors
                position="bottom-right"
            />
        </>
    )
}

export default ConfirmAccountView