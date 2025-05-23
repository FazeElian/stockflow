// import { useNavigate } from "react-router-dom";
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
// import { toast } from "sonner";

// API Call
// import { newProduct } from "../../../api/product";
import { getAllCategories } from "../../../api/category";

// Icons
import { FiInfo } from "react-icons/fi";
import { MdAttachMoney, MdOutlineInventory2 } from "react-icons/md";

const NewProductView = () => {
    // Get all categories
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        refetchOnWindowFocus: false,
    });

    const initialValues = {
        name: "",
        code: "",
        categoryId: 0,
        sellingPrice: 50,
        purchaseCost: 50,
        description: "",
        inflows: 2,
        minimunStock: 1,
        state: 1
    }

    const { register, handleSubmit, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    // const navigate = useNavigate();

    const handleNewProduct = async (formData: NewProduct) => {
        console.log(formData)
        // const imageObtained = formData.image[0]

        // const productData = {
        //     name: formData.name,
        //     categoryId: formData.categoryId,
        //     price: formData.price,
        //     inflows: formData.inflows,
        //     image: imageObtained,
        //     description: formData.description
        // }

        // // console.log(productData)

        // try {
        //     const response = await newProduct(productData)
        //     console.log(response)

        //     navigate("/admin/products")

        //     // Sucess message
        //     toast.success(response);

        //     // Clear form
        //     reset();
        // } catch (error) {
        //     toast.error((error as Error).message);
        // }
    }

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewProduct)}>
                <h1>Añadir Producto</h1>

                <div className="title-section-divided-group-form-module" style={{ marginTop: 0 }}>
                    <FiInfo />
                    <h2>Información Básica</h2>
                </div>
                <div className="group-divided-form-module">
                    {/* Name */}
                    <div className="item-group-divided-form-module group-basic-info-prod">
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

                    {/* Code */}
                    <div className="item-group-divided-form-module group-basic-info-prod">
                        <label htmlFor="name">Código:</label>
                        <input
                            type="text"
                            className="font-inter"
                            id="code"
                            placeholder="Ingresa el código del Producto"
                            {...register("code", {
                                required: "El código del producto es un dato obligatorio.",
                                pattern: {
                                    value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                    message: "Solo se permiten letras, números y guiones."
                                }
                            })}
                        />
                        {errors.code && 
                            <ErrorMessageValidation>
                                {errors.code?.message}
                            </ErrorMessageValidation>
                        }
                    </div>

                    {/* Category */}
                    <div className="item-group-divided-form-module group-basic-info-prod">
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

                {/* Prices info */}
                <div className="title-section-divided-group-form-module">
                    <MdAttachMoney />
                    <h2>Información de Precios</h2>
                </div>
                <div className="group-divided-form-module">
                    {/* Selling price */}
                    <div className="item-group-divided-form-module group-prices-info-prod">
                        <label htmlFor="sellingPrice">Precio de venta (por unidad):</label>
                        <input
                            type="number"
                            step={50}
                            className="font-inter"
                            id="sellingPrice"
                            placeholder="Ingresa el precio de venta para el producto ($$$)"
                            {...register("sellingPrice", {
                                required: "El precio de venta para el producto es un dato obligatorio.",
                            })}
                        />
                        {errors.sellingPrice && 
                            <ErrorMessageValidation>
                                {errors.sellingPrice?.message}
                            </ErrorMessageValidation>
                        }
                    </div>

                    {/* Purchase cost */}
                    <div className="item-group-divided-form-module group-prices-info-prod">
                        <label htmlFor="purchaseCost">Precio de costo (por unidad):</label>
                        <input
                            type="number"
                            step={50}
                            className="font-inter"
                            id="purchaseCost"
                            placeholder="Ingresa el costo por producto ($$$)"
                            {...register("purchaseCost", {
                                required: "El costo por producto es un dato obligatorio.",
                            })}
                        />
                        {errors.purchaseCost && 
                            <ErrorMessageValidation>
                                {errors.purchaseCost?.message}
                            </ErrorMessageValidation>
                        }
                    </div>
                </div>

                {/* Inventory info */}
                <div className="title-section-divided-group-form-module">
                    <MdOutlineInventory2 />
                    <h2>Información de Inventario</h2>
                </div>
                <div className="group-divided-form-module">
                    {/* Inflows - initial stock */}
                    <div className="item-group-divided-form-module group-prices-info-prod">
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

                    {/* Minimum amount to generate inventory alert */}
                    <div className="item-group-divided-form-module group-prices-info-prod">
                        <label htmlFor="inflows">Stock mínimo (alerta al superar el límite):</label>
                        <input
                            type="number"
                            className="font-inter"
                            id="minimunStock"
                            placeholder="Ingresa la cantidad mínima del producto para tu inventario"
                            {...register("minimunStock", {
                                required: "La cantidad mínima del producto es un dato obligatorio",
                                minLength: {
                                    value: 1,
                                    message: "El producto debe tener al menos 1 unidad como cantidad mínima."
                                }
                            })}
                        />
                        {errors.minimunStock && 
                            <ErrorMessageValidation>
                                {errors.minimunStock?.message}
                            </ErrorMessageValidation>
                        }
                    </div>
                </div>

                <div className="group-form-module">
                    {/* State of the product */}
                    <div className="item-group-divided-form-module">
                        <label htmlFor="state">Estado:</label>
                        <select
                            className="font-inter"
                            defaultValue={1}
                            id="state"
                            {...register("state", {
                                required: "El estado del producto es un dato obligatorio.",
                            })}
                        >
                            <option value={1}>Disponible</option>
                            <option value={0}>Agotado</option>
                        </select>
                        {errors.state && 
                            <ErrorMessageValidation>
                                {errors.state?.message}
                            </ErrorMessageValidation>
                        }
                    </div>
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