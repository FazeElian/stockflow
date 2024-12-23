// Components for this view
import TitlePage from "../../../components/admin/TitlePage"

// Styles for this view
import "../../../assets/scss/views/categories/CategoriesView.scss";
import "../../../assets/scss/components/admin/Tables.scss";

// React icons
import { TbEdit } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CategoriesView = () => {
    return (
        <main className="content-page">
            {/* Title component */}
            <TitlePage name="Categorías de Productos" />

            <table className="table table-categories">
                <thead className="thead-categories thead">
                    <tr className="tr tr-categories tr-no-category">No</tr>
                    <tr className="tr tr-name-category">Nombre</tr>
                    <tr className="tr tr-description-category">Descripción</tr>
                    <tr className="tr tr-options-category">Opciones</tr>
                </thead>
                <tbody className="tbody tbody-categories">
                    <td className="td td-no-category">1</td>
                    <td className="td td-name-category">Categoría 1</td>
                    <td className="td td-description-category">Descripción Categoría 1</td>
                    <td className="td td-options td-options-category">
                        <button className="btn-td btn-td-view"><FaEye /></button>
                        <button className="btn-td btn-td-edit"><TbEdit /></button>
                        <button className="btn-td btn-td-delete"><MdDelete /></button>
                    </td>
                </tbody>
            </table>
        </main>
    )
}

export default CategoriesView