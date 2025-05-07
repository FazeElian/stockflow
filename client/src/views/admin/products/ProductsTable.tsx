import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Loading component
import { TableLoader } from "../../../components/admin/TableLoader";

// API Call
import { deleteProduct, getAllProducts } from "../../../api/product";

const ProductsTable = () => {
    const { data: products, refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        retry: 1,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        refetchInterval: 10 * 1000,
    });

    if (isLoading) return <TableLoader />;
    if ((products ?? []).length > 0) {
        const handleDeleteProduct = async (id: number) => {
            const response = await deleteProduct(id)
            refetch()
            toast.success(response)
        }

        return (
            <tbody>
                {products?.map((product, i:number) => (
                    <tr className="tbody tbody-products" key={product.id}>
                        <td className="td td-no-product">{i + 1}</td>
                        <td className="td td-name-product">{product.name}</td>
                        <td className="td td-inflows-product">{product.inflows}</td>
                        <td className="td td-outflows-product">{product.outflows}</td>
                        <td className="td td-stock-product">##</td>
                        <td className="td td-options td-options-product">
                            <Link to={`edit/${product.id}`} className="btn-td btn-td-edit">
                                <TbEdit />
                            </Link>
                            <button className="btn-td btn-td-delete" onClick={() => handleDeleteProduct(product.id)}>
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    } else {
        return (
            <tbody>
                <tr className="tbody tbody-products">
                    <td className="td td-none">
                        No hay productos
                    </td>
                </tr>
            </tbody>
        )
    }
}

export { ProductsTable };