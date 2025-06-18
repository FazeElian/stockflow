import { useNavigate, useParams } from "react-router-dom";

// Styles for this component
import "../../../assets/css/components/admin/services/Forms.css";

// Form component
import { ProductForm } from "../../../components/molecules/ProductForm";

// Mutation
import { useUpdateProductMutation } from "../../../services/products/mutations";
import { useGetProductById } from "../../../services/products/queries";
import { Loading } from "../../../components/atoms/Loading";

// Type
import type { ProductFormType } from "../../../lib/types/services/product.type";

const EditProductView = () => {

    // Redirection
    const redirect = useNavigate()

    // Get id from url param
    const { id } = useParams<{ id: string }>();
    const idProduct = Number(id);

    // Mutation
    const updateProductMutation = useUpdateProductMutation(idProduct)

    // Get product
    const { data: product, isLoading, isError } = useGetProductById(idProduct)

    if (isLoading) return <Loading />
    if (isError) redirect("/admin/products")

    // Default form values
    let initialValues: ProductFormType = {
        name: "",
        code: "",
        categoryId: null,
        sellingPrice: NaN, 
        purchaseCost: NaN,
        description: "",
        inflows: NaN,
        minimumStock: NaN,
        status: "ACTIVE"
    };

    if (product && !(product instanceof Error)) {
        initialValues = {
            name: product.name,
            code: product.code,
            categoryId: product.categoryId ?? null,
            sellingPrice: product.sellingPrice,
            purchaseCost: product.purchaseCost,
            description: product.description,
            inflows: product.inflows,
            minimumStock: product.minimumStock,
            status: product.status
        };
    }

    return (
        <main className="content-page--admin">
            <ProductForm
                initialValues={initialValues}
                useMutation={() => updateProductMutation}
            />
        </main>
    )
}

export default EditProductView