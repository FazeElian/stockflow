// Styles for this view
import "../../../assets/css/views/admin/modules/CategoriesView.css";
import "../../../assets/css/components/admin/modules/Tables.css";

// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Top search bar component
import { TopSearchBar } from "../../../components/admin/TopSearchBar";
// React icons
import { TbEdit } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CategoriesView = () => {
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
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">1</td>
                        <td className="td td-name-category">Nombre categoría</td>
                        <td className="td td-description-category">Descripción categoría</td>
                        <td className="td td-options td-options-category">
                            <button className="btn-td btn-td-view">
                                <FaEye />
                            </button>
                            <button className="btn-td btn-td-edit">
                                <TbEdit />
                            </button>
                            <button className="btn-td btn-td-delete">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">2</td>
                        <td className="td td-name-category">Nombre categoría</td>
                        <td className="td td-description-category">Descripción categoría</td>
                        <td className="td td-options td-options-category">
                            <button className="btn-td btn-td-view">
                                <FaEye />
                            </button>
                            <button className="btn-td btn-td-edit">
                                <TbEdit />
                            </button>
                            <button className="btn-td btn-td-delete">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">3</td>
                        <td className="td td-name-category">Nombre categoría</td>
                        <td className="td td-description-category">Descripción categoría</td>
                        <td className="td td-options td-options-category">
                            <button className="btn-td btn-td-view">
                                <FaEye />
                            </button>
                            <button className="btn-td btn-td-edit">
                                <TbEdit />
                            </button>
                            <button className="btn-td btn-td-delete">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">4</td>
                        <td className="td td-name-category">Nombre categoría</td>
                        <td className="td td-description-category">Descripción categoría</td>
                        <td className="td td-options td-options-category">
                            <button className="btn-td btn-td-view">
                                <FaEye />
                            </button>
                            <button className="btn-td btn-td-edit">
                                <TbEdit />
                            </button>
                            <button className="btn-td btn-td-delete">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default CategoriesView