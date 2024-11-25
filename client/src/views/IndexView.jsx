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

// Footer component
import { FooterCompany } from "../components/FooterCompany";

const IndexView = () => {
    return (
        <>
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
                <section className="app-features bg-black-medium font-inter">
                    <h1 className="color-white bg-transparent">Funcionalidades esenciales para tu negocio</h1>
                    <div className="items-app-features bg-transparent">
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={DashboardIcon} className="bg-transparent" alt="Dashboard" />
                                <h2 className="color-white bg-transparent">Dashboard</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Obtén una visión general de tu negocio con estadísticas de tu negocio,
                                    análisis detallados y reportes personalizados, todo en un solo lugar.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={ProductsIcon} className="bg-transparent" alt="Productos" />
                                <h2 className="color-white bg-transparent">Productos</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Agregue, edite y organice fácilmente su catálogo de productos.
                                    Cada producto incluye detalles como código, nombre, categoría y precio.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={CategoriesIcon} className="bg-transparent" alt="Categorías" />
                                <h2 className="color-white bg-transparent">Categorías</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Clasifica y organiza tus productos por categorías para facilitar la
                                    navegación y la gestión de tu inventario, haciéndolo más eficiente.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={InventoriesIcon} className="bg-transparent" alt="Inventarios" />
                                <h2 className="color-white bg-transparent">Inventarios</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Administra tu inventario con precisión: realiza seguimientos detallados,
                                    evita faltantes y mantén siempre el control de tu stock.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={SalesIcon} className="bg-transparent" alt="Ventas" />
                                <h2 className="color-white bg-transparent">Ventas</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Registra, supervisa y analiza tus ventas de forma intuitiva,
                                    asegurándote de maximizar tus ingresos y satisfacer a tus clientes.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="item-app-features bg-gray-dark"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: .25,
                            }}
                        >
                            <div className="top-item-app-features bg-transparent">
                                <img src={CustomersIcon} className="bg-transparent" alt="Clientes" />
                                <h2 className="color-white bg-transparent">Clientes</h2>
                            </div>
                            <div className="btm-item-app-features bg-transparent">
                                <p className="color-gray bg-transparent">
                                    Gestiona la información de tus clientes de manera eficiente: 
                                    almacena datos clave, enlázalos a tus ventas e identifica patrones de compra.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer component */}
            <FooterCompany />
        </>
    )
}

export default IndexView;