import { Link } from "react-router-dom";

// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Top search bar component
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

// Function from API
import { getCustomers } from "../../../api/StockFlowAPI";

// Tanstack
import { useQuery } from "@tanstack/react-query";

// API Axios config
import api from "../../../config/axios";

// Toast alert component
import { toast } from "sonner";

const CustomersView = () => {
    // Title
    useDocumentTitle("Admin | Clientes");

    const { data: customers, refetch, isLoading, isError } = useQuery({
        queryFn: getCustomers,
        queryKey: ["customer"],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div>Cargando...</div>;
    if (isError) return <div>Error al cargar las categorías</div>;

    // Delete customer function
    const deleteCustomer = async (customerId : string) => {
        try {
            const { data } = await api.delete(`/admin/customers/delete/${customerId}`);

            refetch(); // update customers list
            toast.success(data);
        } catch (error) {
            console.log("Error al eliminar categoría: ", error);
        }
    }

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Clientes" />
            <TopSearchBar
                searchPlaceholder="Buscar cliente"
                exportText="Clientes"
                newText="Cliente"
            />

            <table className="table table-categories">
                <thead>
                    <tr className="thead-categories thead">
                        <th className="tr tr-categories tr-no-category">No</th>
                        <th className="tr tr-name-category">Nombre</th>
                        <th className="tr tr-description-category">Descripción</th>
                        <th className="tr tr-options-category">Opciones</th>
                    </tr>
                </thead>
                
                <tbody>
                    {customers && customers.length > 0 ? (
                        customers.map((customer, i) => (
                            <tr className="tbody tbody-categories" key={customer._id}>
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
                                    <Link to={`edit/${customer._id}`} className="btn-td btn-td-edit">
                                        <TbEdit />
                                    </Link>
                                    <button onClick={() =>deleteCustomer(customer._id)} className="btn-td btn-td-delete">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="tbody tbody-categories">
                            <td className="td td-none">No hay clientes</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CustomersView