// Component for this view
import { ChooseYourPlan } from "../../components/company/ChooseYourPlan"

// Document title custom hook
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const ChooseYourPlanView = () => {
    // Title
    useDocumentTitle("Elije tu plan")

    return (
        <main className="content-page--company">
            <ChooseYourPlan />
        </main>
    )
}

export default ChooseYourPlanView