import { PulseLoader } from "react-spinners"

const Loading = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <PulseLoader
                    color="#FFF"
                    size={25}
                />
            </div>
        </>
    )
}

export { Loading }