import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/scss/components/admin/TopSearchBar.scss";

// React icons
import { IoSearchSharp } from "react-icons/io5";
import { TiExportOutline } from "react-icons/ti";
import { RiListSettingsLine } from "react-icons/ri";

const TopSearchBar = (props) => {
    return (
        <div className="top-search-bar">
            <div className="search">
                <button className="btn-filter">
                    <RiListSettingsLine />
                </button>
                <div className="search-bar">
                    <IoSearchSharp />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder={props.searchPlaceholder}
                    />
                </div>
            </div>
            <div className="module-options">
                <button className="btn-module-options btn-export">
                    <TiExportOutline />
                    Exportar <h2>{props.exportText}</h2>
                </button>
                <Link to="new" className="btn-module-options btn-new">
                    {props.addIcon}
                    Añadir <h2>{props.newText}</h2>
                </Link>
            </div>
        </div>
    )
}

export { TopSearchBar };