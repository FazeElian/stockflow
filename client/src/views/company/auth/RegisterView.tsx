import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { RegisterForm } from "../../../types/auth";

// API Call
import { createAccount } from "../../../api/auth";

const RegisterView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterForm> ({
        defaultValues: {
            userName: "",
            email: "",
            password: ""     
        }
    })

    const handleRegister = async (formData: RegisterForm) => {
        const userData = {
            userName: formData.userName,
            email: formData.email,
            password: formData.password
        }

        // console.log(userData)
        createAccount(userData)

        // Clean form
        reset();
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
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="userName" className="bg-transparent color-white">Nombre de Usuario</label>
                                <input
                                    type="text"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa un nombre de usuario"
                                    {...register("userName", {
                                        required: "Por favor, ingresa un nombre de usuario",
                                        minLength: {
                                            value: 4,
                                            message: "El nombre de usuario debe tener al menos 4 caracteres."
                                        }
                                    })}
                                />
                                {errors.userName && 
                                    <ErrorMessageValidation>
                                        { errors.userName?.message }
                                    </ErrorMessageValidation>
                                }
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Email</label>
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
                                <label htmlFor="password" className="bg-transparent color-white">Contraseña</label>
                                <input
                                    type="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Crea una contraseña (al menos 8 caracteres)"
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
                                Crear mi cuenta
                            </button>

                            <Link to="/auth/login" className="color-white bg-transparent">
                                ¿Ya tienes una cuenta? Iniciar sesión
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

export default RegisterView