// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const SalesView = () => {
    // Title
    useDocumentTitle("Admin | Ventas");

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Ventas" />
        </main>
    )
}

export default SalesView