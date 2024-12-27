// Styles for this view
import "../../assets/css/views/company/IndexView.css";

// Components for this view
import { TopBannerServices } from "../../components/company/TopBannerServices"
import { AppMainFeatures } from "../../components/company/AppMainFeatures";
import { ChooseYourPlan } from "../../components/company/ChooseYourPlan";
import { FooterCompany } from "../../components/company/FooterCompany";

const IndexView = () => {
    return (
        <>
            <main className="content-page--company">
                <TopBannerServices />
                <AppMainFeatures />
                <ChooseYourPlan />
                <FooterCompany bgColor="bg-black-light" />
            </main>
        </>
    )
}

export default IndexView