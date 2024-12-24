// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/scss/components/admin/Forms.scss";

const NewCategoryView = () => {
    return (
        <main className="content-page">
            <form action="" className="form-module" method="post">
                <h1>Nueva Categoría</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" placeholder="Ingresa el nombre de la categoría" required />
                </div>
                <div className="group-form-module">
                    <label htmlFor="name">Descripción:</label>
                    <textarea
                        name=""
                        id=""
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