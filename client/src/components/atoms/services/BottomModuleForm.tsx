import { Link } from "react-router-dom";

// Styles for this component
import "../../../assets/css/components/admin/services/BottomModuleForm.css";

// Type
import type { BottomModuleFormType } from "../../../lib/types/atoms/services/bottom-module-form.type";

const BottomModuleForm : React.FC<BottomModuleFormType> = (props) =>{
    return (
        <div className="btm-module-form">
            <Link to={props.hrefCancelBtn} className="btn-module-form btn-cancel-module-form font-inter">
                Cancelar
            </Link>
            <button className="btn-module-form btn-submit-module-form font-inter" type="submit">
                {props.txtBtnSubmit}
            </button>
        </div>
    )
}

export { BottomModuleForm };