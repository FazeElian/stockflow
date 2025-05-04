import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ConfirmAccountForm } from "../../../types/auth";

// API Call
import { confirmAccount } from "../../../api/auth";

const ConfirmAccountView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ConfirmAccountForm> ({
        defaultValues: {
            token: undefined
        }
    })

    const handleConfirmAccount = async (formData: ConfirmAccountForm) => {
        const userData = {
            token: formData.token
        }
    
        try {
            const response = await confirmAccount(userData);
    
            // Sucess message
            toast.success(response);
    
            // Clear form
            reset();
        } catch (error) {
            toast.error((error as Error).message);
        }
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
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="token" className="bg-transparent color-white">Código de Confirmación</label>
                                <input
                                    type="text"
                                    id="token"
                                    className="color-black bg-white font-inter"
                                    placeholder="Introduce el código enviado a tu correo electrónico"
                                    {...register("token", {
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
                                {errors.token && 
                                    <ErrorMessageValidation>
                                        { errors.token?.message }
                                    </ErrorMessageValidation>
                                }
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Confirmar Cuenta
                            </button>
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

export default ConfirmAccountView;