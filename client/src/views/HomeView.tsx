// Components for this view
import { HeaderCompany } from "../components/company/HeaderCompany"
import { TopBannerServices } from "../components/company/TopBannerServices"
import { AppMainFeatures } from "../components/company/AppMainFeatures"
import { ChooseYourPlan } from "../components/company/ChooseYourPlan"
import { StartNowCallToAction } from "../components/company/StartNowCallToAction"
import { ContactUs } from "../components/company/ContactUs"
import { FooterCompany } from "../components/company/FooterCompany"

const HomeView = () => {
    return (
        <main className="content-page--company">
            <HeaderCompany />
            <TopBannerServices />
            <AppMainFeatures />
            <ChooseYourPlan />
            <StartNowCallToAction />
            <ContactUs />
            <FooterCompany />
        </main>
    )
}

export default HomeView