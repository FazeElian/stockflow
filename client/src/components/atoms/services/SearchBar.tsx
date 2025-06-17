// React icons
import { IoSearchSharp } from "react-icons/io5";
import { RiListSettingsLine } from "react-icons/ri";

// Type
import type { SearchBarType } from "../../../lib/types/atoms/services/top-module-bar.type";

const SearchBar : React.FC<SearchBarType> = (props) => {
    return (
        <form className="search" method="POST">
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
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </form>
    )
}

export { SearchBar };