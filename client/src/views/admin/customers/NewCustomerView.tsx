import { isAxiosError } from "axios";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import ErrorMessageValidation from '../../../components/company/users/ErrorMessageValidation';

// React hook form
import { useForm } from "react-hook-form";

// Type
import { NewCustomerForm } from "../../../types/customers.ts";

// Toast alert component
import { toast } from "sonner";

// Redirection
import { useNavigate } from "react-router-dom";

// API Axios config
import api from "../../../config/axios";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const NewCustomerView = () => {
    // Title
    useDocumentTitle("Registrar Cliente");

    const initialValues = {
        name: "",
        description: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewCustomer = async (formData: NewCustomerForm) => {
        try {
            const { data } = await api.post(`/admin/customers/new`, formData);

            // Clear form
            reset()

            // Redirection to customers view
            navigate("/admin/customers");

            // Sucess toast
            toast.success(data);
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data);
            }
        }
    }

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewCustomer)}>
                <h1>Registrar Cliente</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Ingresa el nombre de el cliente"
                        {...register("name", {
                            required: "El nombre es un campo obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Solo se permiten letras, números y guiones"
                            },
                            minLength: {
                                value: 3,
                                message: "El nombre debe tener al menos 3 caracteres"
                            }
                        })}
                    />
                    {errors.name && 
                        <ErrorMessageValidation>
                            {errors.name?.message}
                        </ErrorMessageValidation>
                    }
                </div>
                <div className="group-form-module">
                    <label htmlFor="name">Descripción:</label>
                    <textarea
                        className="font-inter"
                        id="description"
                        placeholder="Ingresa una descripción para el cliente"
                        {...register("description", {
                            required: false,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Solo se permiten letras, números y guiones"
                            }
                        })}
                    />
                    {errors.description && 
                        <ErrorMessageValidation>
                            {errors.description?.message}
                        </ErrorMessageValidation>
                    }
                </div>
            
                {/* Bottom buttons component */}
                <BottomModuleForm
                    hrefCancelBtn="/admin/customers"
                    txtBtnSubmit="Registrar cliente"
                />
            </form>
        </main>
    )
}

export default NewCustomerView