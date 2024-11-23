import { Link } from "react-router-dom";

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
                        <div className="circle-item-btm-banner-services circle-dashboard-btm-banner-services bg-blue">
                            <img src={DashboardIcon} alt="Dashboard" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Dashboard</h2>
                    </div>

                    {/* Products */}
                    <div className="item-btm-banner-services bg-transparent">
                        <div className="circle-item-btm-banner-services circle-products-btm-banner-services bg-green">
                            <img src={ProductsIcon} alt="Productos" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Productos</h2>
                    </div>

                    {/* Categories */}
                    <div className="item-btm-banner-services bg-transparent">
                        <div className="circle-item-btm-banner-services circle-categories-btm-banner-services bg-brown">
                            <img src={CategoriesIcon} alt="Categorías" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Categorías</h2>
                    </div>

                    {/* Inventories */}
                    <div className="item-btm-banner-services bg-transparent">
                        <div className="circle-item-btm-banner-services circle-inventories-btm-banner-services bg-red">
                            <img src={InventoriesIcon} alt="Inventarios" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Inventarios</h2>
                    </div>

                    {/* Sales */}
                    <div className="item-btm-banner-services bg-transparent">
                        <div className="circle-item-btm-banner-services circle-sales-btm-banner-services bg-purple">
                            <img src={SalesIcon} alt="Ventas" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Ventas</h2>
                    </div>

                    {/* Customers */}
                    <div className="item-btm-banner-services bg-transparent">
                        <div className="circle-item-btm-banner-services circle-customers-btm-banner-services bg-pink">
                            <img src={CustomersIcon} alt="Clientes" className="bg-transparent" />
                        </div>
                        <h2 className="color-white bg-transparent">Clientes</h2>
                    </div>
                </div>

                {/* Button start now */}
                <Link to="/sigin" className="btn-start-now-banner-services color-white">
                    Empezar Ahora
                </Link>
            </section>
        </main>
    )
}

export default IndexView;