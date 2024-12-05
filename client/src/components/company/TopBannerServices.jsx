// Framer motion
import { motion } from 'framer-motion';

// Items
import ItemsBannerServices from './data/ItemsBannerServices';

const TopBannerServices = () => {
    return (
        <section className="banner-services font-inter">
            <div className="top-banner-services bg-tr bg-transparent">
                <h1 className="color-white bg-transparent font-afacad">StockFlow</h1>
                <h2 className="color-gray bg-transparent">
                    Optimización de la gestión de inventario y ventas de tu negocio con facilidad.
                </h2>
            </div>
            <div className="btm-banner-services bg-transparent">
                {/* Items */}
                {ItemsBannerServices.map((item) => (
                    <div className="item-btm-banner-services bg-transparent" key={item.id}>
                        <motion.div
                            className={ `circle-item-btm-banner-services ${item.class}` }
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: `${item.delay}`,
                            }}
                        >
                            <img src={item.imgSrc} alt={item.title} className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">{item.title}</h2>
                    </div>
                ))}
            </div>

            {/* Button start now */}
            <motion.a
                href="/register"
                className="btn-start-now-banner-services color-white"
                animate={{
                    scale: [1, 1.15, 1, 1.15, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatDelay: .5,
                    delay: 1,
                }}
            >
                Empezar Ahora
            </motion.a>
        </section>
    )
}

export { TopBannerServices };