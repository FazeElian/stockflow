import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

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
        refetchOnWindowFocus: false,
    });

    // Handle input for image field
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>("");
  
    const handleClick = () => {
        fileInputRef.current?.click();
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    const initialValues = {
        name: "",
        categoryId: 0,
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
        const imageObtained = formData.image[0]

        const productData = {
            name: formData.name,
            categoryId: formData.categoryId,
            price: formData.price,
            inflows: formData.inflows,
            image: imageObtained,
            description: formData.description
        }

        // console.log(productData)

        try {
            const response = await newProduct(productData)
            console.log(response)

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
                        defaultValue={0}
                        id="categoryId"
                        {...register("categoryId", {
                            required: "La categoría del producto es un dato obligatorio.",
                        })}
                    >
                        <option value={0} disabled>
                            Selecciona una categoría
                        </option>
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
                    <label htmlFor="image">Imagen (Opcional):</label>
                    <button className="file-btn font-inter" onClick={handleClick} type="button">
                        {fileName ? "Imagen cargada" : "Seleccionar Archivo"}
                    </button>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        className="font-inter"
                        id="image"
                        {...register("image", {
                            onChange: handleChange,
                        })}
                        ref={(e) => {
                            fileInputRef.current = e;
                            register("image").ref(e);
                        }}
                    />
                    {errors.image && 
                        <ErrorMessageValidation>
                            {errors.image?.message}
                        </ErrorMessageValidation>
                    }
                </div>

                {/* Inflows */}
                <div className="group-form-module">
                    <label htmlFor="inflows">Entradas - Stock inicial:</label>
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