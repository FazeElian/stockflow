// Styles for this view
import "../assets/css/views/IndexView.css";

// Footer component
import { FooterCompany } from "../components/FooterCompany";

// Components for this view
import { TopBannerServices } from "../components/modules/company/TopBannerServices";
import { AppMainFeatures } from "../components/modules/company/AppMainFeatures";
import { ChooseYourPlan } from "../components/modules/company/ChooseYourPlan";

const IndexView = () => {
    return (
        <>
            <main className="content-page--company">
                <TopBannerServices />
                <AppMainFeatures />
                <ChooseYourPlan />
            </main>

            {/* Footer component */}
            <FooterCompany />
        </>
    )
}

export default IndexView;