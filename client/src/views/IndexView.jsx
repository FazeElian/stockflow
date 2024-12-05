// Styles for this view
import "../assets/css/views/IndexView.css";

// Footer component
import { FooterCompany } from "../components/company/FooterCompany";

// Components for this view
import { TopBannerServices } from "../components/company/TopBannerServices";
import { AppMainFeatures } from "../components/company/AppMainFeatures";
import { ChooseYourPlan } from "../components/company/ChooseYourPlan";
import { StartNowCallToAction } from "../components/company/StartNowCallToAction";

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