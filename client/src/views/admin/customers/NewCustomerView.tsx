import { useNavigate } from "react-router-dom";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Type
import { NewCustomer } from "../../../types/customer";

// Toast alert component
import { toast } from "sonner";

// API Call
import { newCustomer } from "../../../api/customer";

const NewCustomerView = () => {
    const initialValues = {
        name: "",
        description: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewCustomer = async (formData: NewCustomer) => {
        const customerData = {
            name: formData.name,
            description: formData.description
        }
        
        try {
            const response = await newCustomer(customerData)

            navigate("/admin/customers")

            // Sucess message
            toast.success(response);

            // Clear form
            reset();
        } catch (error) {
            toast.error((error as Error).message);
        }
    }

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewCustomer)}>
                <h1>Añadir Cliente</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Ingresa el nombre del cliente"
                        {...register("name", {
                            required: "El nombre del cliente es un dato obligatorio.",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Solo se permiten letras, números y guiones."
                            },
                            minLength: {
                                value: 5,
                                message: "El nombre debe tener al menos 5 caracteres."
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
                    <label htmlFor="name">Descripción (opcional):</label>
                    <textarea
                        className="font-inter"
                        id="description"
                        placeholder="Ingresa una descripción para el cliente"
                        {...register("description", {
                            required: false,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Solo se permiten letras, números y guiones."
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
                    txtBtnSubmit="Añadir Cliente"
                />
            </form>
        </main>
    )
}

export default NewCustomerView