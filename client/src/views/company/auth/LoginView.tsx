import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { LoginForm } from "../../../types/auth";

// API Call
import { login } from "../../../api/auth";

const LoginView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm> ({
        defaultValues: {
            email: "",
            password: ""     
        }
    })

    const handleLogin = async (formData: LoginForm) => {
        const userData = {
            email: formData.email,
            password: formData.password
        }

        try {
            const response = await login(userData)

            // Save JWT on localStorage
            localStorage.setItem("AUTH_TOKEN", response);

            // Sucess message
            toast.success("Has iniciado sesión");

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
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="text"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu correo electrónico"
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

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Iniciar Sesión
                            </button>

                            <Link to="/auth/register" className="color-white bg-transparent">
                                ¿No tienes una cuenta? Regístrate
                            </Link>
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

export default LoginView