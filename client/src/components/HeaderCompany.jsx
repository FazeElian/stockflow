import { Outlet, Link } from "react-router-dom";

// React hooks
import { useState, useEffect } from "react";

// Styles for this component
import "../assets/css/components/HeaderCompany.css";

// Images - icons
    // Logo
    import Logo from "../assets/img/Logo.png";

    // Menu
    import MenuIcon from "../assets/img/icons/Menu.png";

    // Home
    import HomeIcon from "../assets/img/icons/Home.png";

    // Features
    import FeaturesIcon from "../assets/img/icons/Features.png";

    // Pricing
    import PricingIcon from "../assets/img/icons/Pricing.png";

    // Contact us
    import ContactUsIcon from "../assets/img/icons/ContactUs.png";

const HeaderCompany = () => {
    // Menu states
    const [ menu, setMenu ] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu);
    }

    // Hook to disable menu when user scrolls a certain amount
    useEffect(() => {
        const handleScrollMenu = () => {
            const scrollThreshold = 200; // Scroll Amount
            if (window.scrollY > scrollThreshold && menu) {
                setMenu(false);
            }
        };
    
        window.addEventListener('scroll', handleScrollMenu); // Adding Scroll Event
    
        return () => {
            window.removeEventListener('scroll', handleScrollMenu);
        };
    }, [menu]);

    return (
        <>
            <header className="header-company font-inter">
                <nav className="nav-logo--company bg-transparent">
                    <Link to="/" className="bg-transparent">
                        <img src={Logo} alt="StockFlow" className="bg-transparent" />
                    </Link>
                </nav>
                <nav className={ `nav-list--company ${menu ? "active" : ""}` }>
                    <section className="sect-list-nav-list--company">
                        <Link to="/" className="item-nav-list--company bg-transparent">
                            <img src={HomeIcon} alt="" />
                            Inicio
                        </Link>
                        <Link to="/" className="item-nav-list--company bg-transparent">
                            <img src={FeaturesIcon} alt="" />
                            Funcionalidades
                        </Link>
                        <Link to="/" className="item-nav-list--company bg-transparent">
                            <img src={PricingIcon} alt="" />
                            Elije tu Plan
                        </Link>
                        <Link to="/" className="item-nav-list--company bg-transparent">
                            <img src={ContactUsIcon} alt="" />
                            Contáctanos
                        </Link>
                    </section>

                    <section className="sect-user-nav-list--company">
                        <Link to="/" className="item-nav-list--company bg-transparent">Iniciar Sesión</Link>
                        <Link to="/" className="item-nav-list--company bg-transparent">Registrarse</Link>
                    </section>
                </nav>
                <nav className="nav-user--company bg-transparent">
                    <Link to="/" className="btn-header--company btn-login-header--company color-white">
                        Ingresar
                    </Link>
                    <Link to="/" className="btn-header--company btn-signin-header--company color-white">
                        Únete
                    </Link>
                    <button className="btn-menu--company color-white bg-transparent" onClick={toggleMenu}>
                        <img src={MenuIcon} alt="Menu" />
                    </button>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { HeaderCompany }; 