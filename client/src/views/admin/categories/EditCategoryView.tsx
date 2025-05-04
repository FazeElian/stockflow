import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Type
import { Category, UpdateCategory } from "../../../types/category";

// Toast alert component
import { toast } from "sonner";

// API Call
import { getCategoryById, updateCategory } from "../../../api/category";
import { useEffect } from "react";

const EditCategoryView = () => {
    const { id } = useParams<{ id: string }>();
    const idNumber = id ? Number(id) : undefined;
    
    // Redirect
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            description: ""
        }
    });

    const { data: category, isLoading } = useQuery<Category>({
        queryKey: ["category", idNumber],
        queryFn: () => getCategoryById(idNumber!),
        enabled: !!idNumber,
        staleTime: 5 * 60 * 1000
    });

    useEffect(() => {
        if (category) {
            reset({
                name: category.name,
                description: category.description
            });
        }
    }, [category, reset]);

    const handleUpdateCategory = async (formData: { name: string; description: string }) => {
        const categoryData: UpdateCategory = {
            id: idNumber!,
            name: formData.name,
            description: formData.description
        };
        
        try {
            const response = await updateCategory(categoryData, idNumber!);
            navigate("/admin/categories");
    
            // Success message
            toast.success(response);
        } catch (error) {
            toast.error((error as Error).message);
        }
    }
    
    if (isLoading) return <p>Cargando...</p>;

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleUpdateCategory)}>
                <h1>Editar Categoría</h1>
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
                    txtBtnSubmit="Guardar cambios"
                />
            </form>
        </main>
    )
}

export default EditCategoryView