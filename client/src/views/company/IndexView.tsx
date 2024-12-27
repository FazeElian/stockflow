// Styles for this view
import "../../assets/css/views/company/IndexView.css";

// Components for this view
import { TopBannerServices } from "../../components/company/TopBannerServices"

const IndexView = () => {
    return (
        <>
            <main className="content-page--company">
                <TopBannerServices />
            </main>
        </>
    )
}

export default IndexView