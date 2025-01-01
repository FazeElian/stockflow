// Title component
import { TitleView } from "../../components/admin/TitleView"

// Document title custom hook
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

const HomeView = () => {
    // Title
    useDocumentTitle("Admin | Inicio");

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Panel Principal" />
        </main>
    )
}

export default HomeView