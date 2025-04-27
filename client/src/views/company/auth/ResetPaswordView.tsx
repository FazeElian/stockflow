import { useForm } from "react-hook-form";
import { Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ResetPasswordForm } from "../../../types/auth";

const ResetPasswordView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordForm> ({
        defaultValues: {
            password: "",
        }
    })

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
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">Nueva contraseña</label>
                                <input
                                    type="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Crea una nueva contraseña (al menos 8 caracteres)."
                                    {...register("password", {
                                        required: "Debes ingresar una contraseña.",
                                        minLength: {
                                            value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres."
                                        }
                                    })}
                                />
                                {errors.password && 
                                    <ErrorMessageValidation>
                                        { errors.password?.message }
                                    </ErrorMessageValidation>
                                }
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Restablecer contraseña
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

export default ResetPasswordView;