import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";

// Styles
import "../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../assets/img/Logo.webp";

// Type
import type { RegisterForm } from "../../lib/types/services/auth/user.type";

// Form components
import { AuthInputField } from "../../components/atoms/auth/AuthInputField";
import { AuthSubmitButton } from "../../components/atoms/auth/AuthSubmitButton";

// Mutation
import { useRegisterMutation } from "../../services/auth/mutations";

const RegisterView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterForm> ({
        defaultValues: {
            userName: "",
            email: "",
            password: ""     
        }
    })

    const registerMutation = useRegisterMutation()
    const handleRegister = async (formData: RegisterForm) => {
        registerMutation.mutate(formData, {
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
                        onSubmit={handleSubmit(handleRegister)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Complete el formulario para crear su cuenta
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <AuthInputField
                                type="text"
                                label="Nombre de Usuario"
                                labelFor="userName"
                                placeholder="Ingresa un nombre de usuario"
                                error={errors.userName}
                                {...register("userName", {
                                    required: "Por favor, ingresa un nombre de usuario",
                                    pattern: {
                                        value: /^[a-zA-Z][a-zA-Z0-9._]*$/,
                                        message: "El nombre de usuario debe comenzar con una letra y solo puede contener letras, números, puntos o guiones bajos"
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "El nombre de usuario debe tener al menos 4 caracteres."
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "El nombre de usuario no puede superar los 60 caracteres."
                                    }
                                })}
                            />
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
                            <AuthInputField
                                type="password"
                                label="Contraseña"
                                labelFor="password"
                                placeholder="Crea una contraseña (al menos 8 caracteres)"
                                error={errors.password}
                                {...register("password", {
                                    required: "Debes ingresar una contraseña.",
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener al menos 8 caracteres."
                                    }
                                })}
                            />
                            <AuthSubmitButton text="Crear mi cuenta" />

                            <Link to="/auth/login" className="color-white bg-transparent">
                                ¿Ya tienes una cuenta? Iniciar sesión
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

export default RegisterView