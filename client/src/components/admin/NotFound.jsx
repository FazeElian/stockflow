import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/scss/components/admin/NotFound.scss";

// Framer motion
import { motion } from "motion/react"

const NotFound = (props) => {
    return (
        <main className="content-page">
            <motion.div
                className="not-found"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: .3,
                    ease: [0, .71, .2, 1.01]
                }}
            >
                <h1>404</h1>
                <h2>Página no encontrada</h2>
                <Link to={props.btnLink} className="btn-not-found">
                    {props.btnText}
                </Link>
            </motion.div>
        </main>
    )
}

export default NotFound