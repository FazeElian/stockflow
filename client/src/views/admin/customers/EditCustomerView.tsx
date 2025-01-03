// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

// Hooks - tanstack & params
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// Function from API Call
import { getCustomer } from "../../../api/StockFlowAPI";

// Form component
import { EditCustomerForm } from "./EditCustomerForm";

const EditCustomerView = () => {
    // Title
    useDocumentTitle("Editar Cliente");

    // Customer id from URL param
    const { _id } = useParams<{ _id: string }>();

    const { data, isError, refetch, isLoading } = useQuery ({
        queryFn: () => getCustomer(_id!),
        queryKey: ["customer", _id],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return "Cargando";
    if (isError) return "error"

    if (data) {
        return (
            <>
                <EditCustomerForm
                    _id={data._id}
                    name={data.name}
                    description={data.description}
                    refetch={refetch}
                />
            </>
        )
    }
}

export default EditCustomerView