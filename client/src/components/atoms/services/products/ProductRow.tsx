import { Link } from "react-router-dom";

// React icons
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const ProductRow = () => {
    return (
        <tr className="tbody tbody-products">
            <td className="td td-code-product">
                #PROD1
            </td>
            <td className="td td-name-product">
                <Link to="">
                    Producto 1
                </Link>
            </td>
            <td className="td td-sellingPrice-product">
                $ 1000
            </td>
            <td className="td td-outflows-product">
                20
            </td>
            <td className="td td-stock-product">
                10
            </td>
            <td className="td td-state-product">
                {/* {product.state ? (
                    <div className="item-td-state-prod available-td-state-prod">
                        <h2>Disponible</h2>
                        <FaCheckCircle />
                    </div>
                ): (
                    <div className="item-td-state-prod out-td-state-prod">
                        <h2>Agotado</h2>
                        <FaBan />
                    </div>
                )} */}
                <div className="item-td-state-prod available-td-state-prod">
                    <h2>Disponible</h2>
                    <FaCheckCircle />
                </div>
            </td>
            <td className="td td-options td-options-product">
                <Link to="" className="btn-td btn-td-edit">
                    <TbEdit />
                </Link>
                <button className="btn-td btn-td-delete">
                    <MdDelete />
                </button>
            </td>
        </tr>
    )
}

export { ProductRow };