// Styles for this component
import "../../assets/css/components/admin/services/Tables.css";
import "../../assets/css/components/admin/services/products/ProductsTable.css";

// Subcomponent
import { ProductRow } from "../atoms/services/products/ProductRow";

const ProductsTable = () => {
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
                {/* <tr className="tbody tbody-products">
                    <td className="td td-none">
                        No hay productos
                    </td>
                </tr> */}
                <ProductRow />
            </tbody>
        </table>
    )
}

export { ProductsTable };