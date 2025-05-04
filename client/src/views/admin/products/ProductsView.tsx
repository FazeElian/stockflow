// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const ProductsView = () => {
    // Page title
    useDocumentTitle("Admin | Productos")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Productos" />
        </main>
    )
}

export default ProductsView