// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../api/StockFlowAPI";
import { useParams } from "react-router-dom";
import { EditCategoryForm } from "./EditCategoryForm";

const EditCategoryView = () => {
    // Title
    useDocumentTitle("Nueva Categoría");

    // Category id from URL param
    const { _id } = useParams<{ _id: string }>();

    const { data, isError, refetch, isLoading } = useQuery ({
        queryFn: () => getCategory(_id!),
        queryKey: ["category", _id],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return "Cargando";
    if (isError) return "error"

    if (data) {
        return (
            <>
                <EditCategoryForm
                    _id={data._id}
                    name={data.name}
                    description={data.description}
                    refetch={refetch}
                />
            </>
        )
    }
}

export default EditCategoryView