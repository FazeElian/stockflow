// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

const NewCategoryView = () => {
    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post">
                <h1>Nueva Categoría</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="font-inter"
                        name="name"
                        id="name"
                        placeholder="Ingresa el nombre de la categoría"
                    />
                </div>
                <div className="group-form-module">
                    <label htmlFor="name">Descripción:</label>
                    <textarea
                        name="description"
                        className="font-inter"
                        id="description"
                        placeholder="Ingresa una descripción para la categoría"
                    />
                </div>
            
                {/* Bottom buttons component */}
                <BottomModuleForm
                    hrefCancelBtn="/admin/categories"
                    txtBtnSubmit="Crear categoría"
                />
            </form>
        </main>
    )
}

export default NewCategoryView