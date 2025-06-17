import { PulseLoader } from "react-spinners"

const ModuleLoader = () => {
    return (
        <>
            <div className="module-loader">
                <PulseLoader
                    color="#FFF"
                    size={15}
                />
            </div>
        </>
    )
}

export { ModuleLoader }