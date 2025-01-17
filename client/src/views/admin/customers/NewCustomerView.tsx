import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { toast } from "sonner";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Type
import { Customer } from "../../../types/customer";

// API Call
import api from "../../../config/axios";

const NewCustomerView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Customer> ({
        defaultValues: {
            name: "",
            description: ""
        }
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewCustomer = async (formData: Customer) => {
        try {
            const { data } = await api.post("/admin/customers/create", formData);

            // Sucess message
            toast.success(data)

            // Redirection to customers view
            navigate("/admin/customers");
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error);
            }
        }
    }

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewCustomer)}>
                <h1>New customer</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Enter the name of the customer"
                        {...register("name", {
                            required: "The customer name is required.",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Only letters, numbers, and dashes are allowed."
                            },
                            minLength: {
                                value: 3,
                                message: "Password must be at least 3 characters long."
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
                    <label htmlFor="name">Description:</label>
                    <textarea
                        className="font-inter"
                        id="description"
                        placeholder="Enter a description for the customer"
                        {...register("description", {
                            required: false,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Only letters, numbers, and dashes are allowed."
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
                    txtBtnSubmit="Create customer"
                />
            </form>
        </main>
    )
}

export default NewCustomerView