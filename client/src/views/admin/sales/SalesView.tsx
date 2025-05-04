// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const SalesView = () => {
    // Page title
    useDocumentTitle("Admin | Ventas")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Ventas" />
        </main>
    )
}

export default SalesView