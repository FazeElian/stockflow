import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ValidateCodeForm } from "../../../types/auth";

// API Call
import { validateCode } from "../../../api/auth";

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const ValidateCodeView = () => {
    // Page title
    useDocumentTitle("Verificar Código")

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ValidateCodeForm>({
        defaultValues: {
            token: undefined,
        }
    })

    const handleValidateCode = async (formData: ValidateCodeForm) => {
        const userData = {
            token: formData.token
        }
    
        try {
            const response = await validateCode(userData);
    
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
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="token" className="bg-transparent color-white">Código</label>
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
                                Reestablecer contraseña
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

export default ValidateCodeView;