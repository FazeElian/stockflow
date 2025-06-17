import { Link } from "react-router-dom";

// React icons
import { IoAddCircleOutline } from "react-icons/io5";
import { TiExportOutline } from "react-icons/ti";

// Typec
import type { ModuleOptionsType } from "../../../lib/types/atoms/services/top-module-bar.type";

const ModuleOptions : React.FC<ModuleOptionsType> = (props) => {
    return (
        <>
            {props.exportText ? (
                <div className="module-options">
                    <button className="btn-module-options btn-export font-inter">
                        <TiExportOutline />
                        Exportar <h2>{props.exportText}</h2>
                    </button>
                    <Link to="new" className="btn-module-options btn-new font-inter">
                        <IoAddCircleOutline />
                        <h2>{props.newText}</h2>
                    </Link>
                </div>
            ) : (
                <div className="module-options">
                    <Link to="new" className="btn-module-options btn-new font-inter">
                        <IoAddCircleOutline />
                        <h2>{props.newText}</h2>
                    </Link>
                </div>
            )}
        </>
    )
}

export { ModuleOptions };