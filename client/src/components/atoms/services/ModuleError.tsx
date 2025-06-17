import { FaExclamationTriangle } from "react-icons/fa"

const ModuleError = () => {
    return (
        <>
            <div className="module-error">
                <FaExclamationTriangle
                    color="#F20544"
                    size={24}
                />
                <h2>Error al cargar productos. Intenta de nuevo más tarde.</h2>
            </div>
        </>
    )
}

export { ModuleError }