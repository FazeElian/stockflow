import { useForm } from "react-hook-form";

// React icons
import { FiInfo } from "react-icons/fi";
import { MdAttachMoney, MdOutlineInventory2 } from "react-icons/md";

// Atoms components
import { InputField } from "../atoms/services/InputField";
import { CategoriesSelectField } from "../atoms/services/CategoriesSelectField";
import { TextAreaField } from "../atoms/services/TextAreaField";
import { SimpleSelectField } from "../atoms/services/SimpleSelectField";
import { BottomModuleForm } from "../atoms/services/BottomModuleForm";

// Types
import type { ProductFormType, ProductFormPropsType } from "../../lib/types/services/product.type";

// Options list
import { ProductStatusOptions } from "../../lib/lists/services/ProductStatusOptions";

const ProductForm : React.FC<ProductFormPropsType> = ({ initialValues, useMutation }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormType>({
        defaultValues: initialValues
    });

    const mutation = useMutation()
    const handleFormProduct = (formData: ProductFormType) => {
        mutation.mutate(formData, {
            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <form
            action=""
            className="form-module font-inter"
            method="POST"
            onSubmit={handleSubmit(handleFormProduct)}
        >
            <h1>Añadir Producto</h1>
            <div className="title-section-divided-group-form-module" style={{ marginTop: 0 }}>
                <FiInfo />
                <h2>Información Básica</h2>
            </div>
            <div className="group-divided-form-module">
                {/* Name */}
                <InputField
                    type="text"
                    error={errors.name}
                    groupClassName="group-form-module group-basic-info-prod"
                    label="Nombre"
                    labelFor="name"
                    placeholder="Ejemplo: Chocolate amargo"
                    {...register("name", {
                        required: "El nombre del producto es un dato obligatorio.",
                        pattern: {
                            value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                            message: "Solo se permiten letras, números y guiones."
                        },
                        minLength: {
                            value: 2,
                            message: "El nombre del producto debe tener entre al menos 2 caracteres"
                        },
                        maxLength: {
                            value: 100,
                            message: "El nombre del producto no puede superar los 100 caracteres"
                        }
                    })}
                />

                {/* Code */}
                <InputField
                    type="text"
                    error={errors.code}
                    groupClassName="group-form-module group-basic-info-prod"
                    label="Código"
                    labelFor="code"
                    placeholder="Ejemplo: CH-AM01"
                    {...register("code", {
                        required: "El código del producto es un dato obligatorio.",
                        pattern: {
                            value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                            message: "Solo se permiten letras, números y guiones."
                        },
                        minLength: {
                            value: 2,
                            message: "El código del producto debe tener entre al menos 2 caracteres"
                        },
                        maxLength: {
                            value: 10,
                            message: "El código del producto no puede superar los 10 caracteres"
                        }
                    })}
                />

                {/* Category */}
                <CategoriesSelectField
                    label="Categoría"
                    labelFor="categoryId"
                    groupClassName="group-form-module group-basic-info-prod"
                    error={errors.categoryId}
                    defaultValue=""
                    {...register("categoryId")}
                />
            </div>

            {/* Description */}
            <TextAreaField
                error={errors.description}
                groupClassName="group-form-module"
                label="Descripción (opcional)"
                labelFor="description"
                placeholder="Ingresa una descripción para el producto"
                {...register("description", {
                    required: false,
                    pattern: {
                        value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                        message: "Solo se permiten letras, números y guiones."
                    }
                })}
            />

            {/* Prices info */}
            <div className="title-section-divided-group-form-module">
                <MdAttachMoney />
                <h2>Información de Precios</h2>
            </div>
            <div className="group-divided-form-module">
                {/* Selling price */}
                <InputField
                    type="number"
                    error={errors.sellingPrice}
                    groupClassName="group-form-module group-prices-info-prod"
                    label="Precio de venta (por unidad)"
                    labelFor="sellingPrice"
                    placeholder="$$$"
                    {...register("sellingPrice", {
                        required: "El precio de venta del producto es un dato obligatorio.",
                        validate: value => value > 0 || "Precio de venta no válido.",
                        maxLength: {
                            value: 10,
                            message: "El precio de venta no puede superar las 10 cifras"
                        }
                    })}
                />

                {/* Purchase Cost */}
                <InputField
                    type="number"
                    error={errors.purchaseCost}
                    groupClassName="group-form-module group-prices-info-prod"
                    label="Precio de costo (por unidad)"
                    labelFor="purchaseCost"
                    placeholder="$$"
                    {...register("purchaseCost", {
                        required: "El costo por producto es un dato obligatorio.",
                        validate: value => value > 0 || "Costo por producto no válido.",
                        maxLength: {
                            value: 10,
                            message: "El costo por producto no puede superar las 10 cifras"
                        }
                    })}
                />
            </div>

            {/* Inventory info */}
            <div className="title-section-divided-group-form-module">
                <MdOutlineInventory2 />
                <h2>Información de Inventario</h2>
            </div>
            <div className="group-divided-form-module">
                {/* Inflows - initial stock */}
                <InputField
                    type="number"
                    error={errors.inflows}
                    groupClassName="group-form-module group-prices-info-prod"
                    label="Entradas - Stock inicial"
                    labelFor="inflows"
                    placeholder="Ingresa la cantidad de existencias iniciales del producto"
                    {...register("inflows", {
                        required: "La cantidad de existencias iniciales del producto es un dato obligatorio",
                        validate: value => value > 0 || "El producto debe tener al menos 1 existencia inicial.",
                    })}
                />

                {/* Minimum amount to generate inventory alert */}
                <InputField
                    type="number"
                    error={errors.minimumStock}
                    groupClassName="group-form-module group-prices-info-prod"
                    label="Stock mínimo (alerta al superar el límite)"
                    labelFor="minimumStock"
                    placeholder="Ingresa la cantidad mínima del producto para tu inventario"
                    {...register("minimumStock", {
                        required: "La cantidad mínima del producto es un dato obligatorio",
                        validate: value => value > 0 || "El producto debe tener al menos 1 unidad como cantidad mínima."
                    })}
                />
            </div>

            {/* Status */}
            <SimpleSelectField
                label="Estado"
                labelFor="status"
                groupClassName="group-form-module"
                error={errors.status}
                optionsList={ProductStatusOptions}
                defaultValue="ACTIVE"
                {...register("status", {
                    required: "El estado del producto es un dato obligatorio.",
                })}
            />
        
            {/* Bottom buttons component */}
            <BottomModuleForm
                hrefCancelBtn="/admin/products"
                txtBtnSubmit="Añadir Producto"
            />
        </form>

    )
}

export { ProductForm };