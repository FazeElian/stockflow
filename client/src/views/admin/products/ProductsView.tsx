// Styles
import "../../../assets/css/components/admin/modules/Tables.css";
import "../../../assets/css/views/admin/ProductsView.css";

// Components for this view
import { TitleView } from "../../../components/admin/TitleView"
import { TopSearchBar } from "../../../components/admin/TopSearchBar"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

// Products Table component
import { ProductsTable } from "./ProductsTable"

const ProductsView = () => {
    // Page title
    useDocumentTitle("Admin | Productos")

    const handleSearchSubmit = () => {
        console.log()
    }

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Productos" />
            <TopSearchBar
                searchPlaceholder="Buscar producto"
                exportText="Productos"
                newText="Producto"
                inputName="name"
                onSearchSubmit={handleSearchSubmit}
            />
            <table className="table table-categories">
                <thead>
                    <tr className="thead-categories thead">
                        <th className="tr tr-categories tr-no-product">#</th>
                        <th className="tr tr-name-product">Nombre</th>
                        <th className="tr tr-inflows-product">Entradas</th>
                        <th className="tr tr-outflows-product">Salidas</th>
                        <th className="tr tr-stock-product">Stock</th>
                        <th className="tr tr-options-product">Opciones</th>
                    </tr>
                </thead>
                
                <ProductsTable />
            </table>
        </main>
    )
}

export default ProductsView