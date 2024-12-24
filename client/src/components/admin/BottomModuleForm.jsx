import { Link } from 'react-router-dom';

// Styles for this component
import "../../assets/scss/components/admin/BottomModuleForm.scss";

const BottomModuleForm = (props) => {
    return (
        <div className="btm-module-form">
            <Link to={props.hrefCancelBtn} className="btn-module-form btn-cancel-module-form">
                Cancelar
            </Link>
            <button className="btn-module-form btn-submit-module-form" type="submit">
                {props.txtBtnSubmit}
            </button>
        </div>
    )
}

export { BottomModuleForm };