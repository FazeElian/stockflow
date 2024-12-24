// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/scss/components/admin/Forms.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Functions from API call
import { New } from "../../../api/category";
import { getLoggedInUser } from "../../../api/admin";

const NewCategoryView = () => {
    const [ user, setUser ] = useState([""]);
    const [ data, setData ] = useState({
        name: "",
        description: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.log("Token not found");
        }

        getLoggedInUser(token)
            .then((data) => setUser(data))
            .catch((err) => console.log(err))
    }, []);

    const handleChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await New({ ...data, userId: user.id });
            
            // Redirection
            navigate("/admin/categories");
            alert("Categoría creada con éxito");

            console.log("Resultado: ", response);
        } catch (error) {
            console.error("Error creando la categoría: ", error);
        }
    }

    return (
        <main className="content-page">
            <form action="" className="form-module" method="post" onSubmit={handleSubmit}>
                <h1>Nueva Categoría</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa el nombre de la categoría"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="group-form-module">
                    <label htmlFor="name">Descripción:</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={handleChange}
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