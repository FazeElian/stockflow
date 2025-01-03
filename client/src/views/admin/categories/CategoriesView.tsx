import { Link } from "react-router-dom";

// Styles for this view
import "../../../assets/css/views/admin/modules/CategoriesView.css";
import "../../../assets/css/components/admin/modules/Tables.css";

// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Top search bar component
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Function from API
import { getCategories } from "../../../api/StockFlowAPI";

// Tanstack
import { useQuery } from "@tanstack/react-query"

// Type
import { Category } from "../../../types/categories";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"

// Toast alert component
import { toast } from "sonner";

// API Axios config
import api from "../../../config/axios";

const CategoriesView = () => {
    // Title
    useDocumentTitle("Admin | Categorías");

    const { data: categories, isLoading, isError, refetch} = useQuery({
        queryFn: getCategories,
        queryKey: ["category"],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <div>Cargando...</div>;
    if (isError) return <div>Error al cargar las categorías</div>;

    // Delete category function
    const deleteCategory = async (categoryId : string) => {
        try {
            const { data } = await api.delete(`/admin/categories/delete/${categoryId}`);

            refetch(); // update categories list
            toast.success(data);
        } catch (error) {
            console.log("Error al eliminar categoría: ", error);
        }
    }

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Categorías" />
            <TopSearchBar
                searchPlaceholder="Buscar categoría"
                exportText="Categorías"
                newText="Categoría"
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
                    {categories && categories.length > 0 ? (
                        categories.map((category: Category, i: number) => (
                            <tr className="tbody tbody-categories" key={category._id}>
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
                                    <Link to={`edit/${category._id}`} className="btn-td btn-td-edit">
                                        <TbEdit />
                                    </Link>
                                    <button className="btn-td btn-td-delete" onClick={() => deleteCategory(category._id)}>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="tbody tbody-categories">
                            <td className="td td-none">No hay categorías</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CategoriesView