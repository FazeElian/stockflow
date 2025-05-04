// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const CustomersView = () => {
    // Page title
    useDocumentTitle("Admin | Clientes")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Clientes" />
        </main>
    )
}

export default CustomersView