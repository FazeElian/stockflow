// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

const ProfileView = () => {
    // Page title
    useDocumentTitle("Admin | Perfil")

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Perfil" />
        </main>
    )
}

export default ProfileView