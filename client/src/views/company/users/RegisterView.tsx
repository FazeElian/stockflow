import { Link } from "react-router-dom"
import axios, { isAxiosError } from "axios";

// Styles for this view
import "../../../assets/css/views/company/users/Form.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// React hook form
import { useForm } from "react-hook-form";

// Error message component
import ErrorMessageValidation from "../../../components/company/users/ErrorMessageValidation";

// User type
import { RegisterForm } from "../../../types/users";

const RegisterView = () => {
    const initialValues : RegisterForm = {
        userName: "",
        email: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues
    });

    const handleRegister = async (formData : RegisterForm) => {
        try {
            const {data} = await axios.post("http://localhost:8081/auth/register", formData);
            console.log({data});
            alert("Usuario creado con éxito")
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.error(error.response.data.error);
            }
        }
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form action="" className="form-users bg-black-light font-inter" method="POST" onSubmit={handleSubmit(handleRegister)}>
                        <div className="top-form-users bg-transparent">
                            <img src={Logo} className="bg-transparent" alt="" />
                            <h2 className="color-gray bg-transparent">Completa el formulario para crear tu cuenta</h2>
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
                                        required: "El nombre es un campo obligatorio"
                                    })}
                                />
                                {errors.userName && 
                                    <ErrorMessageValidation>
                                        {errors.userName?.message}
                                    </ErrorMessageValidation>
                                }
                            </div>
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Correo Electrónico</label>
                                <input
                                    type="text"
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
                                    placeholder="Crea una contraseña (mínimo 8 caracteres)"
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
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Crear mi cuenta
                            </button>

                            <Link to="/auth/login" className="color-white bg-transparent">Ya tienes una cuenta? Iniciar Sesión</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterView