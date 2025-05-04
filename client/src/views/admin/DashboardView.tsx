// Title component
import { TitleView } from "../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

const DashboardView = () => {
    // Page title
    useDocumentTitle("Admin | Panel Principal")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Panel Principal" />
        </main>
    )
}

export default DashboardView