// Title component
import { TitleView } from "../../../components/admin/TitleView"

// Top search bar component
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Document title custom hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { Link } from "react-router-dom";

const CustomersView = () => {
    // Title
    useDocumentTitle("Admin | Clientes");

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
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">1</td>
                        <td className="td td-name-category">Cliente 1</td>
                        <td className="td td-description-category color-gray">
                            Sin descripción
                        </td>
                        <td className="td td-options td-options-category">
                            <Link to="" className="btn-td btn-td-edit">
                                <TbEdit />
                            </Link>
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

export default CustomersView