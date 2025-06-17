// Styles for this component
import "../../assets/css/components/admin/services/TitleView.css";

// Type
import type { TitleViewType } from "../../lib/types/atoms/services/title-view.type";

// Functional component -> React.FC
const TitleView : React.FC<TitleViewType> = (props) => {
    return (
        <div className="title-view">
            {props.name}
        </div>
    )
}

export { TitleView };