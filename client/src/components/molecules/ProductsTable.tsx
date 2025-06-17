// Styles for this component
import "../../assets/css/components/admin/services/Tables.css";
import "../../assets/css/components/admin/services/products/ProductsTable.css";

// Subcomponent
import { ProductRow } from "../atoms/services/products/ProductRow";

// Query
import { useGetAllProducts } from "../../services/products/queries";
import type { ProductRowType } from "../../lib/types/services/product.type";

const ProductsTable = () => {
    // Get all products
    const { data: products, isLoading, isError } = useGetAllProducts()

    if (isLoading) {
        return ""
    }

    if (isError) {
        return ""
    }

    return (
        <table className="table table-products">
            <thead>
                <tr className="thead-products thead">
                    <th className="tr tr-code-product">Código</th>
                    <th className="tr tr-name-product">Nombre</th>
                    <th className="tr tr-sellingPrice-product">Precio Venta</th>
                    <th className="tr tr-outflows-product">Salidas</th>
                    <th className="tr tr-stock-product">Stock</th>
                    <th className="tr tr-state-product">Estado</th>
                    <th className="tr tr-options-product">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product: ProductRowType) => (
                        <ProductRow
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            code={product.code}
                            sellingPrice={product.sellingPrice}
                            outflows={product.outflows}
                            stock={product.stock}
                            status={product.status}
                        />
                    ))
                ) : (
                    <tr className="tbody tbody-products">
                        <td className="td td-none" colSpan={7}>
                            No hay productos
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export { ProductsTable };