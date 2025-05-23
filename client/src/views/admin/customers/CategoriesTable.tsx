import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Loading component
import { TableLoader } from "../../../components/admin/TableLoader";

// API Call
import {
    deleteCustomer,
    getAllCustomers,
    searchCustomer
} from "../../../api/customer";

interface CustomersTableProps {
    searchQuery: string;
}

const CustomersTable: React.FC<CustomersTableProps> = ({ searchQuery }) => {
    const queryKey = searchQuery
        ? ["customers", "search", searchQuery]
        : ["customers", "all"];

    const { data: customers, refetch, isLoading } = useQuery({
        queryKey,
        queryFn: () =>
            searchQuery
                ? searchCustomer(searchQuery)
                : getAllCustomers(),
        retry: 1,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        refetchInterval: 300 * 1000,
    });

    if (isLoading) return <TableLoader />;
    if ((customers ?? []).length > 0) {
        const handleDeleteCustomer = async (id: number) => {
            const response = await deleteCustomer(id)
            refetch()
            toast.success(response)
        } 

        return (
            <tbody>
                {customers?.map((customer, i:number) => (
                    <tr className="tbody tbody-categories" key={customer.id}>
                        <td className="td td-no-category">{i + 1}</td>
                        <td className="td td-name-category">{customer.name}</td>
                        {customer.description ? (
                            <td className="td td-description-category">
                                {customer.description}
                            </td>
                        ) : (
                            <td className="td td-description-category color-gray">
                                Sin descripción
                            </td>
                        )}
                        <td className="td td-options td-options-category">
                            <Link to={`edit/${customer.id}`} className="btn-td btn-td-edit">
                                <TbEdit />
                            </Link>
                            <button className="btn-td btn-td-delete" onClick={() => handleDeleteCustomer(customer.id)}>
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
                <tr className="tbody tbody-customers">
                    <td className="td td-none">
                        {searchQuery
                            ? `No hay clientes que coincidan con "${searchQuery}"`
                            : "No hay clientes"}
                    </td>
                </tr>
            </tbody>
        )
    }
}

export { CustomersTable };