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
import { NewCategory } from "../../../types/category";

// Toast alert component
import { toast } from "sonner";

// API Call
import { newCategory } from "../../../api/category";

const NewCategoryView = () => {
    const initialValues = {
        name: "",
        description: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewCategory = async (formData: NewCategory) => {
        const categoryData = {
            name: formData.name,
            description: formData.description
        }
        
        try {
            const response = await newCategory(categoryData)

            navigate("/admin/categories")

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
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewCategory)}>
                <h1>Añadir Categoría</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Ingresa el nombre de la categoría"
                        {...register("name", {
                            required: "El nombre de la categoría es un dato obligatorio.",
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
                        placeholder="Ingresa una descripción para la categoría"
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
                    hrefCancelBtn="/admin/categories"
                    txtBtnSubmit="Añadir Categoría"
                />
            </form>
        </main>
    )
}

export default NewCategoryView