import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ForgotPasswordForm } from "../../../types/auth";

// API call
import api from "../../../config/axios";

const ForgotPasswordView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ForgotPasswordForm> ({
        defaultValues: {
            email: "",
        }
    })

    const navigate = useNavigate();

    const handleForgotPassword = async (formData: ForgotPasswordForm) => {
        try {
            const { data } = await api.post("/auth/forgot-password", formData);
            reset();

            // Sucess message
            toast.success(data)

            // Redirection to validate code view
            setTimeout(() => {
                navigate("/auth/validate-code");
            }, 3000)
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error);
            }
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
                        onSubmit={handleSubmit(handleForgotPassword)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Request a code to your email to reset your password.
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="email" className="bg-transparent color-white">Email Address</label>
                                <input
                                    type="email"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Enter the email associated with your account"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Please enter a valid email address."
                                        }
                                    })}
                                />
                                {errors.email && 
                                    <ErrorMessageValidation>
                                        { errors.email?.message }
                                    </ErrorMessageValidation>
                                }
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Send Recovery code
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

export default ForgotPasswordView;