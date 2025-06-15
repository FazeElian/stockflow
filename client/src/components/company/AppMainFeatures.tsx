import { motion } from "framer-motion";
import { Element } from "react-scroll";

// Styles for this component
import "../../assets/css/components/company/TopBannerServices.css";

// Items
import ItemsMainFeatures from "../../lib/lists/ItemsMainFeatures";

const AppMainFeatures = () => {
    return (
        <Element className="app-features bg-black font-inter" name="features">
            <h1 className="color-white bg-black">Características esenciales para su negocio</h1>
                <div className="items-app-features bg-black">
                    {ItemsMainFeatures.map((item) => (
                        <div key={item.id}>
                            <motion.div
                                className="item-app-features bg-black-light"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: .25,
                                }}
                            >
                                <div className="top-item-app-features bg-transparent">
                                    <item.imgSrc />
                                    <h2 className="color-white bg-transparent">{item.title}</h2>
                                </div>
                                <div className="btm-item-app-features bg-transparent">
                                    <p className="color-gray bg-transparent">{item.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
        </Element>
    )
}

export { AppMainFeatures };