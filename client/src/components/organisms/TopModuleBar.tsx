// Styles
import "../../assets/css/components/admin/services/TopModuleBar.css";

// Subcomponents
import { ModuleOptions } from "../atoms/services/ModuleOptions";
import { SearchBar } from "../atoms/services/SearchBar";

// Type
import type { TopModuleBarType } from "../../lib/types/atoms/services/top-module-bar.type";

const TopModuleBar : React.FC<TopModuleBarType> = (props) => {
    return (
        <div className="top-module-bar">
            <SearchBar
                inputName={props.inputName}
                searchPlaceholder={props.searchPlaceholder}
            />
            <ModuleOptions
                newText={props.newText}
                exportText={props?.exportText}
            />
        </div>
    )
}

export { TopModuleBar };