import { useState } from "react";
import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/modules/TopSearchBar.css";

// React icons
import { IoSearchSharp, IoAddCircleOutline } from "react-icons/io5";
import { TiExportOutline } from "react-icons/ti";
import { RiListSettingsLine } from "react-icons/ri";

interface TopSearchBarProps {
    searchPlaceholder: string,
    exportText: string,
    newText: string
    inputName: string,
    onSearchSubmit: (query: string) => void;
}

const TopSearchBar: React.FC<TopSearchBarProps> = (props) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSearchSubmit(searchQuery);
    };

    return (
        <div className="top-search-bar">
            <form className="search" method="post" onSubmit={handleSearchSubmit}>
                <button className="btn-filter">
                    <RiListSettingsLine />
                </button>
                <div className="search-bar">
                    <IoSearchSharp />
                    <input
                        className="font-inter"
                        type="search"
                        name={props.inputName}
                        id="search"
                        placeholder={props.searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>
            <div className="module-options">
                <button className="btn-module-options btn-export font-inter">
                    <TiExportOutline />
                    Exportar <h2>{props.exportText}</h2>
                </button>
                <Link to="new" className="btn-module-options btn-new font-inter">
                    <IoAddCircleOutline />
                    Añadir <h2>{props.newText}</h2>
                </Link>
            </div>
        </div>
    )
}

export { TopSearchBar };