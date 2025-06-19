// Components for this view
import { TitleView } from "../../../components/atoms/services/TitleView"
import { TopModuleBar } from "../../../components/organisms/TopModuleBar"
import { CategoriesGallery } from "../../../components/molecules/CategoriesGallery"

const CategoriesView = () => {
    return (
        <main className="content-page--admin font-inter">
            {/* Title */}
            <TitleView name="Categorías de Productos" />

            {/* Top Bar */}
            <TopModuleBar
                inputName="name"
                searchPlaceholder="Buscar categoría por nombre"
                newText="Añadir categoría"
            />

            <CategoriesGallery />
        </main>
    )
}

export default CategoriesView