// Styles for this component
import "../../../assets/css/components/admin/services/Forms.css";

// Form component
import { ProductForm } from "../../../components/molecules/ProductForm";

// Mutation
import { useNewProductMutation } from "../../../services/products/mutations";

const NewProductView = () => {
    // Default form values
    const initialValues = {
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

    // Mutation
    const newProductMutation = useNewProductMutation()

    return (
        <main className="content-page--admin">
            <ProductForm
                initialValues={initialValues}
                useMutation={() => newProductMutation}
            />
        </main>
    )
}

export default NewProductView