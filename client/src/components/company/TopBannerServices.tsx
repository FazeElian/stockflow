import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Element } from "react-scroll";

// Styles for this component
import "../../assets/css/components/company/TopBannerServices.css";

// Items
import ItemsTopBannerServices from "../../lib/lists/ItemsTopBannerServices";

const TopBannerServices = () => {
    return (
        <Element className="banner-services font-inter" name="home">
            <div className="top-banner-services bg-tr bg-transparent">
                <h1 className="color-white bg-transparent font-afacad">StockFlow</h1>
                <h2 className="color-gray bg-transparent">
                    Optimice el inventario y la gestión de ventas de su negocio fácilmente.
                </h2>
            </div>
            <div className="btm-banner-services bg-transparent">
                {/* Items */}
                {ItemsTopBannerServices.map((item) => (
                    <div className="item-btm-banner-services bg-transparent" key={item.id}>
                        <motion.div
                            className={ `circle-item-btm-banner-services ${item.class}` }
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: item.delay,
                            }}
                        >
                            <item.imgSrc />
                        </motion.div>
                        <h2 className="color-white bg-transparent">{item.title}</h2>
                    </div>
                ))}
            </div>

            {/* Button start now */}
            <Link
                to="/auth/register"
                className="btn-start-now-banner-services color-white"
            >
                Empezar Ahora
            </Link>
        </Element>
    )
}

export { TopBannerServices };