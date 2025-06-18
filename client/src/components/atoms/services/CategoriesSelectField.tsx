import { Link } from "react-router-dom";

// Types
import type { SelectFieldType } from "../../../lib/types/services/components/select-field.type"

// Query
import { useGetAllCategories } from "../../../services/categories/queries";

const CategoriesSelectField = ({
    groupClassName,
    label,
    labelFor,
    ...rest
} : SelectFieldType) => {
    // Get all categories
    const { data: categoriesList, isLoading } = useGetAllCategories()

    return (
        <div className={groupClassName}>
            <label htmlFor={labelFor}>{label}:</label>
            
            {Array.isArray(categoriesList) && categoriesList.length > 0 &&
                <select
                    {...rest}
                    className="font-inter"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Selecciona una categoría
                    </option>
                    {categoriesList.map((category) => (
                        <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            }
            {!isLoading && (!Array.isArray(categoriesList) || categoriesList.length === 0) && (
                <div className="no-categories">
                    No hay categorías.
                    <Link to="/admin/categories/new">
                        Añadir
                    </Link>
                </div>
            )}
            {isLoading &&
                <div className="categories-loading">Cargando...</div>
            }
        </div>
    )
}

export { CategoriesSelectField };