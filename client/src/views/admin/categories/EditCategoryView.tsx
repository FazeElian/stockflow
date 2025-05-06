import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Type
import { Category } from "../../../types/category";

// API Call
import { getCategoryById } from "../../../api/category";
import { EditCategoryForm } from "./EditCategoryForm";

// Loader component
import { Loading } from "../../../components/Loading";
import { toast } from "sonner";

const EditCategoryView = () => {
    const { id } = useParams<{ id: string }>();
    const idNumber = id ? Number(id) : undefined;
    const navigate = useNavigate()
    
    const { data: category, isLoading } = useQuery<Category>({
        queryKey: ["category", idNumber],
        queryFn: () => getCategoryById(idNumber!),
        enabled: !!idNumber,
        staleTime: 5 * 60 * 1000
    });

    if (isLoading) return <Loading />;

    if (category) {
        return (
            <main className="content-page--admin">
                <EditCategoryForm
                    id={category.id}
                    name={category.name}
                    description={category.description}
                />
            </main>
        )
    } else {
        navigate("/admin/categories")
        return toast.error("Esta categoría no existe o ha sido eliminada.")
    }
}

export default EditCategoryView