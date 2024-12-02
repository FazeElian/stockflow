// Footer component
import { FooterCompany } from "../../../components/FooterCompany";

// App features component
import { AppDetailedFeatures } from "../../../components/modules/AppDetailedFeatures";

const FeaturesView = () => {
    return (
        <>
            <main className="content-page--company">
                <AppDetailedFeatures />
            </main>

            {/* Footer component */}
            <FooterCompany bgColor="bg-black-light" />
        </>
    )
}

export default FeaturesView;