// Type
import { Category, NewCategoryForm } from "../../../types/categories"

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Error message component
import ErrorMessageValidation from './../../../components/company/users/ErrorMessageValidation';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import api from "../../../config/axios";

type CategoryProps = Pick<Category, "_id" | "name" | "description" > & { refetch: () => void };

const EditCategoryForm = ({ _id, name, description, refetch } : CategoryProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm ({
        defaultValues: {
            name: name,
            description: description
        }
    });

    const navigate = useNavigate();

    const handleUpdateCategory = async (formData: NewCategoryForm) => {
        try {
            const { data } = await api.patch(`/admin/categories/edit/${_id}`, formData);

            // Redirection to categories view
            navigate("/admin/categories");

            // Sucess toast
            toast.success(data);

            // Refetch the category data
            refetch();
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data);
            }
        }
    };

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleUpdateCategory)}>
                <h1>Editar Categoría:</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Ingresa el nombre de la categoría"
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
                        placeholder="Ingresa una descripción para la categoría"
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
                    hrefCancelBtn="/admin/categories"
                    txtBtnSubmit="Actualizar categoría"
                />
            </form>
        </main>
    )
}

export { EditCategoryForm };