// Components for this view
import { TitleView } from "../../../components/atoms/services/TitleView"
import { TopModuleBar } from "../../../components/organisms/TopModuleBar"

const InvoicesView = () => {
    return (
        <main className="content-page--admin font-inter">
            {/* Title */}
            <TitleView name="Facturas" />

            {/* Top Bar */}
            <TopModuleBar
                inputName="name"
                searchPlaceholder="Buscar factura por código"
                newText="Nueva factura"
                exportText="facturas"
            />
        </main>
    )
}

export default InvoicesView