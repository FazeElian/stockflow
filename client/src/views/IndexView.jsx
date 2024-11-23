// Framer motion
import { motion } from "framer-motion";

// Styles for this view
import "../assets/css/views/IndexView.css";

// Images - Icons
    // Dashboard
    import DashboardIcon from "../assets/img/icons/Dashboard.png";

    // Products
    import ProductsIcon from "../assets/img/icons/Products.png";

    // Categories
    import CategoriesIcon from "../assets/img/icons/Categories.png";

    // Inventories
    import InventoriesIcon from "../assets/img/icons/Inventories.png";

    // Sales
    import SalesIcon from "../assets/img/icons/Sales.png";

    // Customers
    import CustomersIcon from "../assets/img/icons/Customers.png";

const IndexView = () => {
    return (
        <main className="content-page--company">
            <section className="banner-services font-inter">
                <div className="top-banner-services bg-tr bg-transparent">
                    <h1 className="color-white bg-transparent font-afacad">StockFlow</h1>
                    <h2 className="color-gray bg-transparent">
                        Optimización de la gestión de inventario y ventas de tu negocio con facilidad.
                    </h2>
                </div>
                <div className="btm-banner-services bg-transparent">
                    {/* Dashboard */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-dashboard-btm-banner-services bg-blue"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={DashboardIcon} alt="Dashboard" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Dashboard</h2>
                    </div>

                    {/* Products */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-products-btm-banner-services bg-green"
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: .20,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={ProductsIcon} alt="Productos" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Productos</h2>
                    </div>

                    {/* Categories */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-categories-btm-banner-services bg-brown"
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: .40,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={CategoriesIcon} alt="Categorías" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Categorías</h2>
                    </div>

                    {/* Inventories */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-inventories-btm-banner-services bg-red"
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: .60,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={InventoriesIcon} alt="Inventarios" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Inventarios</h2>
                    </div>

                    {/* Sales */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-sales-btm-banner-services bg-purple"
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: .80,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={SalesIcon} alt="Ventas" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Ventas</h2>
                    </div>

                    {/* Customers */}
                    <div className="item-btm-banner-services bg-transparent">
                        <motion.div
                            className="circle-item-btm-banner-services circle-customers-btm-banner-services bg-pink"
                            initial={{ opacity: 0, scale: 0 }}
                            transition={{
                                delay: 1,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img src={CustomersIcon} alt="Clientes" className="bg-transparent" />
                        </motion.div>
                        <h2 className="color-white bg-transparent">Clientes</h2>
                    </div>
                </div>

                {/* Button start now */}
                <motion.a
                    href="/signin"
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
        </main>
    )
}

export default IndexView;