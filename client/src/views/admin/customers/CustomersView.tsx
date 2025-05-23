import { useState } from "react"

// Styles
import "../../../assets/css/components/admin/modules/Tables.css";
import "../../../assets/css/views/admin/CategoriesView.css";

// Components for this view
import { TitleView } from "../../../components/admin/TitleView"
import { TopSearchBar } from "../../../components/admin/TopSearchBar"

// Document title hook
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { CustomersTable } from "./CategoriesTable"

const CustomersView = () => {
    // Page title
    useDocumentTitle("Admin | Clientes")

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (value: string) => {
        value = value.toLowerCase()
        setSearchQuery(value);
    };

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Clientes" />
            <TopSearchBar
                searchPlaceholder="Buscar cliente"
                exportText="Clientes"
                newText="Cliente"
                inputName="name"
                onSearchSubmit={handleSearchSubmit}
            />
            <table className="table table-categories">
                <thead>
                    <tr className="thead-categories thead">
                        <th className="tr tr-categories tr-no-category">#</th>
                        <th className="tr tr-name-category">Nombre</th>
                        <th className="tr tr-description-category">Descripción</th>
                        <th className="tr tr-options-category">Opciones</th>
                    </tr>
                </thead>
                
                <CustomersTable searchQuery={searchQuery} />
            </table>
        </main>
    )
}

export default CustomersView