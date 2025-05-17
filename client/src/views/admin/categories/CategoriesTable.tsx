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
    deleteCategory,
    getAllCategories,
    searchCategory
} from "../../../api/category";

interface CategoriesTableProps {
    searchQuery: string;
}

const CategoriesTable: React.FC<CategoriesTableProps> = ({ searchQuery }) => {
    const queryKey = searchQuery
        ? ["categories", "search", searchQuery]
        : ["categories", "all"];

    const { data: categories, refetch, isLoading } = useQuery({
        queryKey,
        queryFn: () =>
            searchQuery
                ? searchCategory(searchQuery)
                : getAllCategories(),
        retry: 1,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        refetchInterval: 300 * 1000,
    });

    if (isLoading) return <TableLoader />;
    if ((categories ?? []).length > 0) {
        const handleDeleteCategory = async (id: number) => {
            const response = await deleteCategory(id)
            refetch()
            toast.success(response)
        } 

        return (
            <tbody>
                {categories?.map((category, i:number) => (
                    <tr className="tbody tbody-categories" key={category.id}>
                        <td className="td td-no-category">{i + 1}</td>
                        <td className="td td-name-category">{category.name}</td>
                        {category.description ? (
                            <td className="td td-description-category">
                                {category.description}
                            </td>
                        ) : (
                            <td className="td td-description-category color-gray">
                                Sin descripción
                            </td>
                        )}
                        <td className="td td-options td-options-category">
                            <Link to={`edit/${category.id}`} className="btn-td btn-td-edit">
                                <TbEdit />
                            </Link>
                            <button className="btn-td btn-td-delete" onClick={() => handleDeleteCategory(category.id)}>
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
                <tr className="tbody tbody-categories">
                    <td className="td td-none">
                        {searchQuery
                            ? `No hay categorías que coincidan con "${searchQuery}"`
                            : "No hay categorías"}
                    </td>
                </tr>
            </tbody>
        )
    }
}

export { CategoriesTable };