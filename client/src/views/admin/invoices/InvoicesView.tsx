// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const InvoicesView = () => {
    // Title
    useDocumentTitle("Admin | Facturas");

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Facturas" />
        </main>
    )
}

export default InvoicesView