// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const InvoicesView = () => {
    // Page title
    useDocumentTitle("Admin | Facturas")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Facturas" />
        </main>
    )
}

export default InvoicesView