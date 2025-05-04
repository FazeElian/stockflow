import { PulseLoader } from "react-spinners"

const TableLoader = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}>
                <PulseLoader
                    color="#FFF"
                    size={20}
                />
            </div>
        </>
    )
}

export { TableLoader }