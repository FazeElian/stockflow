import { useEffect, useState } from "react";

// Components for this view
import TitlePage from "../../../components/admin/TitlePage"
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// Styles for this view
import "../../../assets/scss/views/categories/CategoriesView.scss";
import "../../../assets/scss/components/admin/Tables.scss";

// React icons
import { TbEdit } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiFunctionAddLine } from "react-icons/ri";

// Function from API Call
import { GetAll } from "../../../api/category";

const CategoriesView = () => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await GetAll()
                    .then((data) => setCategories([...data]))
                    .catch((err) => console.log(err))
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className="content-page">
            {/* Title component */}
            <TitlePage name="Categorías de Productos" />

            {/* Top search bar component */}
            <TopSearchBar
                searchPlaceholder="Buscar categoría"
                exportText="Categorías"
                newText="Categoría"
                addIcon={<RiFunctionAddLine />}
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
                    {categories.length > 0 ? (
                        categories.map((category, i) => (
                            <tr className="tbody tbody-categories" key={category.id}>
                                <td className="td td-no-category">{i+1}</td>
                                <td className="td td-name-category">{category.name}</td>
                                <td className="td td-description-category">
                                    {category.description ? category.description : "Sin descripción"}
                                </td>
                                <td className="td td-options td-options-category">
                                    <button className="btn-td btn-td-view"><FaEye /></button>
                                    <button className="btn-td btn-td-edit"><TbEdit /></button>
                                    <button className="btn-td btn-td-delete"><MdDelete /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="tbody tbody-categories">
                            <td className="td td-none">
                                No hay categorías
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CategoriesView