// Styles for this view
import "../assets/css/views/IndexView.css";

// Footer component
import { FooterCompany } from "../components/FooterCompany";

// Components for this view
import { TopBannerServices } from "../components/modules/company/TopBannerServices";
import { AppMainFeatures } from "../components/modules/company/AppMainFeatures";
import { ChooseYourPlan } from "../components/modules/company/ChooseYourPlan";
import { StartNowCallToAction } from "../components/modules/company/StartNowCallToAction";

const IndexView = () => {
    return (
        <>
            <main className="content-page--company">
                <TopBannerServices />
                <AppMainFeatures />
                <ChooseYourPlan />
                <StartNowCallToAction />
            </main>

            {/* Footer component */}
            <FooterCompany bgColor="bg-black" />
        </>
    )
}

export default IndexView;