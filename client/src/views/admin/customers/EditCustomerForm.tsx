import { useNavigate, useParams } from "react-router-dom";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Type
import { Customer, UpdateCustomer } from "../../../types/customer";

// Toast alert component
import { toast } from "sonner";

// API Call
import { updateCustomer } from "../../../api/customer";

const EditCustomerForm : React.FC<Customer> = (props) => {
    const { id } = useParams<{ id: string }>();
    const idNumber = id ? Number(id) : undefined;
    
    // Redirect
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: props.name,
            description: props.description
        }
    });

    const handleUpdateCustomer = async (formData: { name: string; description: string }) => {
        const customerData: UpdateCustomer = {
            id: idNumber!,
            name: formData.name,
            description: formData.description
        };
        
        try {
            const response = await updateCustomer(customerData, idNumber!);
            navigate("/admin/customers");
    
            // Success message
            toast.success(response);
        } catch (error) {
            toast.error((error as Error).message);
        }
    }
    
    return (
        <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleUpdateCustomer)}>
            <h1>Editar Cliente</h1>
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
                txtBtnSubmit="Guardar cambios"
            />
        </form>
    )
}

export { EditCustomerForm };