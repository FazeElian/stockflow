// Styles for this component
import "../../assets/scss/components/admin/TitlePage.scss";

const TitlePage = (props) => {
    return (
        <div className="title-page">
            <h1>{props.name}</h1>
        </div>
    )
}

export default TitlePage