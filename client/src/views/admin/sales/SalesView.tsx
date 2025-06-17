// Components for this view
import { TitleView } from "../../../components/atoms/services/TitleView"
import { TopModuleBar } from "../../../components/organisms/TopModuleBar"

const SalesView = () => {
    return (
        <main className="content-page--admin font-inter">
            {/* Title */}
            <TitleView name="Ventas" />

            {/* Top Bar */}
            <TopModuleBar
                inputName="name"
                searchPlaceholder="Buscar venta por código o cliente"
                newText="Registrar venta"
                exportText="ventas"
            />
        </main>
    )
}

export default SalesView