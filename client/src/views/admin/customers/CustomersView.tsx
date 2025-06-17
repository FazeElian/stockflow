// Components for this view
import { TitleView } from "../../../components/atoms/services/TitleView"
import { TopModuleBar } from "../../../components/organisms/TopModuleBar"

const CustomersView = () => {
    return (
        <main className="content-page--admin font-inter">
            {/* Title */}
            <TitleView name="Clientes" />

            {/* Top Bar */}
            <TopModuleBar
                inputName="name"
                searchPlaceholder="Buscar cliente por nombre"
                newText="Añadir cliente"
            />
        </main>
    )
}

export default CustomersView