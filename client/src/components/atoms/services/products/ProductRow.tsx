import { Link } from "react-router-dom";
import { toast } from "sonner";


// React icons
import { FaBan, FaCheckCircle } from "react-icons/fa";
import { FaHourglass } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

// Type
import type { ProductRowType } from "../../../../lib/types/services/product.type";

// Delete mutation
import { useDeleteProductMutation } from "../../../../services/products/mutations";

const ProductRow : React.FC<ProductRowType> = (product) => {
    const deleteProductMutation = useDeleteProductMutation()
    const handleDeleteProduct  = (id: number) => {
        toast.warning(`¿Seguro que quieres eliminar este producto: "${product.name}"?`, {
            action: (
                <button
                    onClick={() => {
                        deleteProductMutation.mutate(id)
                        toast.dismiss();
                    }}
                    className="font-inter btn-confirm-delete"
                >
                    Eliminar
                </button>
            ),
        });
    }

    return (
        <tr className="tbody tbody-products" key={product.id}>
            <td className="td td-code-product">
                #{product.code}
            </td>
            <td className="td td-name-product">
                <Link to="">
                    {product.name}
                </Link>
            </td>
            <td className="td td-sellingPrice-product">
                ${product.sellingPrice}
            </td>
            <td className="td td-outflows-product">
                {product.outflows}
            </td>
            <td className="td td-stock-product">
                {product.stock}
            </td>
            <td className="td td-state-product">
                {product.status === "ACTIVE" ? (
                    <div className="item-td-state-prod available-td-state-prod">
                        <h2>Disponible</h2>
                        <FaCheckCircle />
                    </div>
                ) : product.status === "OUT" ? (
                    <div className="item-td-state-prod out-td-state-prod">
                        <h2>Agotado</h2>
                        <FaHourglass />
                    </div>
                ) : (
                    <div className="item-td-state-prod discontinued-td-state-prod">
                        <h2>Descontinuado</h2>
                        <FaBan />
                    </div>
                )}
            </td>
            <td className="td td-options td-options-product">
                <Link to={`edit/${product.id}`} className="btn-td btn-td-edit">
                    <TbEdit />
                </Link>
                <button
                    type="button"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn-td btn-td-delete"
                >
                    <MdDelete />
                </button>
            </td>
        </tr>
    )
}

export { ProductRow };