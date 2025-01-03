import { Link } from "react-router-dom"
import { isAxiosError } from "axios";

// Styles for this view
import "../../../assets/css/views/company/users/Form.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// React hook form
import { useForm } from "react-hook-form";

// Error message component
import ErrorMessageValidation from '../../../components/company/users/ErrorMessageValidation';

// User type
import { LoginForm } from "../../../types/users";

// Toast alert component
import { toast } from "sonner";

// Redirection
import { useNavigate } from "react-router-dom";

// API Axios config
import api from "../../../config/axios";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

const LoginView = () => {
    // Title
    useDocumentTitle("Iniciar sesión")

    const initialValues = {
        email: "",
        password: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleLogin = async (formData: LoginForm) => {
        try {
            const {data} = await api.post(`/auth/login`, formData);
            
            // Save JWT on localStorage
            localStorage.setItem("AUTH_TOKEN", data);

            // Clear form
            reset()
            navigate("/admin/home");
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data);
            }
        }
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="POST" onSubmit={handleSubmit(handleLogin)}>
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Ingresa tus credenciales para acceder a tu cuenta</h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu correo electrónico"
                                    {...register("email", {
                                        required: "El correo es un campo obligatorio",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Correo electrónico no válido",
                                        },
                                    })}
                                />
                                {errors.email && 
                                    <ErrorMessageValidation>
                                        {errors.email?.message}
                                    </ErrorMessageValidation>
                                }
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">Contraseña</label>
                                <input
                                    type="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Ingresa tu contraseña"
                                    {...register("password", {
                                        required: "Debes crear una contraseña",
                                        minLength: {
                                            value: 8,
                                            message: "La contraseña debe ser de mínimo 8 caracteres"
                                        }
                                    })}
                                />
                                {errors.password && 
                                    <ErrorMessageValidation>
                                        {errors.password?.message}
                                    </ErrorMessageValidation>
                                }
                                <Link to="/auth/forgot-password" className="color-white bg-transparent">Olvidaste tu contraseña?</Link>
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Iniciar Sesión
                            </button>

                            <Link to="/auth/register" className="color-white bg-transparent">No tienes una cuenta? Registrarse</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default LoginView