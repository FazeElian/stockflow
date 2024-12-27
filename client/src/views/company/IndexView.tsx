// Styles for this view
import "../../assets/css/views/company/IndexView.css";

// Components for this view
import { TopBannerServices } from "../../components/company/TopBannerServices"
import { AppMainFeatures } from "../../components/company/AppMainFeatures";
import { ChooseYourPlan } from "../../components/company/ChooseYourPlan";

const IndexView = () => {
    return (
        <>
            <main className="content-page--company">
                <TopBannerServices />
                <AppMainFeatures />
                <ChooseYourPlan />
            </main>
        </>
    )
}

export default IndexView