import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Types
import { NewProduct } from "../../../types/product";

// Toast alert component
import { toast } from "sonner";

// API Call
import { newProduct } from "../../../api/product";
import { getAllCategories } from "../../../api/category";

const NewProductView = () => {
    // Get all categories
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        refetchInterval: 10 * 1000,
    });

    const initialValues = {
        name: "",
        categoryId: 1,
        price: 50,
        inflows: 1,
        image: "",
        description: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewProduct = async (formData: NewProduct) => {
        const productData = {
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            inflows: formData.inflows,
            image: formData.image,
            description: formData.description
        }
        
        try {
            const response = await newProduct(productData)

            navigate("/admin/products")

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
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewProduct)}>
                <h1>Añadir Producto</h1>

                {/* Name */}
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Ingresa el nombre de la Producto"
                        {...register("name", {
                            required: "El nombre del producto es un dato obligatorio.",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Solo se permiten letras, números y guiones."
                            }
                        })}
                    />
                    {errors.name && 
                        <ErrorMessageValidation>
                            {errors.name?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Category */}
                <div className="group-form-module">
                    <label htmlFor="category">Categoría:</label>
                    <select
                        className="font-inter"
                        id="categoryId"
                        {...register("categoryId", {
                            required: "La categoría del producto es un dato obligatorio.",
                        })}
                    >
                        <option value="" disabled selected>Seleccionar Categoría</option>
                        {categories?.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.categoryId && 
                        <ErrorMessageValidation>
                            {errors.categoryId?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Price */}
                <div className="group-form-module">
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="number"
                        step={50}
                        className="font-inter"
                        id="price"
                        placeholder="Ingresa el precio del producto ($$$)"
                        {...register("price", {
                            required: "El precio del producto es un dato obligatorio.",
                        })}
                    />
                    {errors.price && 
                        <ErrorMessageValidation>
                            {errors.price?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Image */}
                <div className="group-form-module">
                    <label htmlFor="image">Categoría:</label>
                    <input
                        type="file"
                        className="font-inter"
                        id="image"
                        placeholder="Ingresa el precio del producto ($$$)"
                    />
                    {errors.image && 
                        <ErrorMessageValidation>
                            {errors.image?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Inflows */}
                <div className="group-form-module">
                    <label htmlFor="inflows">Entradas (Stock inicial):</label>
                    <input
                        type="number"
                        className="font-inter"
                        id="inflows"
                        placeholder="Ingresa la cantidad de existencias iniciales del producto"
                        {...register("inflows", {
                            required: "La cantidad de existencias iniciales del producto es un dato obligatorio",
                            minLength: {
                                value: 1,
                                message: "El producto debe tener al menos 1 existencia inicial."
                            }
                        })}
                    />
                    {errors.inflows && 
                        <ErrorMessageValidation>
                            {errors.inflows?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Description */}
                <div className="group-form-module">
                    <label htmlFor="description">Descripción (opcional):</label>
                    <textarea
                        className="font-inter"
                        id="description"
                        placeholder="Ingresa una descripción para el producto"
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
                    hrefCancelBtn="/admin/products"
                    txtBtnSubmit="Añadir Producto"
                />
            </form>
        </main>
    )
}

export default NewProductView