// Components for this view
import { TitleView } from "../../../components/atoms/services/TitleView"
import { TopModuleBar } from "../../../components/organisms/TopModuleBar"
import { ProductsTable } from "../../../components/molecules/ProductsTable"

const ProductsView = () => {
    return (
        <main className="content-page--admin font-inter">
            {/* Title */}
            <TitleView name="Productos" />

            {/* Top Bar */}
            <TopModuleBar
                inputName="name"
                searchPlaceholder="Buscar producto por nombre o código"
                newText="Nuevo producto"
                exportText="productos"
                shortNewText="Nuevo"
            />

            {/* Table */}
            <ProductsTable />
        </main>
    )
}

export default ProductsView