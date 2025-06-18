import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
import { ErrorMessageValidation } from "../../components/atoms/ErrorMessageValidation";

// Styles
import "../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { LoginForm } from "../../lib/types/services/user.type";

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

// Mutation
import { useLoginMutation } from "../../services/auth/mutations";

const LoginView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm> ({
        defaultValues: {
            email: "",
            password: ""     
        }
    })

    const loginMutation = useLoginMutation()
    const handleLogin = async (formData: LoginForm) => {
        loginMutation.mutate(formData, {
            onSuccess: () => {
                reset()
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
                        method="POST"
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Ingrese sus credenciales para acceder a su cuenta
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <AuthInputField
                                type="email"
                                label="Correo Electrónico"
                                labelFor="email"
                                placeholder="Ingresa tu correo electrónico"
                                error={errors.email}
                                {...register("email", {
                                    required: "El correo electrónico es obligatorio",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Por favor, ingresa un correo electrónico válido"
                                    }
                                })}
                            />
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">Password</label>
                                <input
                                    type="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu contraseña"
                                    {...register("password", {
                                        required: "Debes ingresar tu contraseña.",
                                    })}
                                />
                                {errors.password && 
                                    <ErrorMessageValidation>
                                        { errors.password?.message }
                                    </ErrorMessageValidation>
                                }

                                <Link to="/auth/forgot-password" className="color-white bg-transparent">
                                    Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <AuthSubmitButton text="Iniciar Sesión" />

                            <Link to="/auth/register" className="color-white bg-transparent">
                                ¿No tienes una cuenta? Regístrate
                            </Link>
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

export default LoginView