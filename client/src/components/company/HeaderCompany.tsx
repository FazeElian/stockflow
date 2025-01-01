import { useState } from "react";
import { Outlet } from "react-router-dom";

// React scroll
import { Link } from "react-scroll";

// Styles for this component
import "../../assets/css/components/company/HeaderCompany.css";

// Logo
import Logo from "../../assets/img/Logo.png";

// React icons
import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { Toaster } from "sonner";

const HeaderCompany = () => {
    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <header className="header-company font-inter">
                <nav className="nav-logo--company bg-transparent">
                    <Link
                        to="home"
                        className="bg-transparent"
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                    >
                        <img src={Logo} alt="StockFlow" className="bg-transparent" />
                    </Link>
                </nav>
                <nav className={ `nav-list--company ${menu ? "active" : ""}` }>
                    <section className="sect-list-nav-list--company">
                        <Link
                            to="home"
                            className="item-nav-list--company bg-transparent"
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500}
                        >
                            <FaHome />
                            Inicio
                        </Link>
                        <Link
                            to="features"
                            className="item-nav-list--company bg-transparent"
                            spy={true}
                            offset={-80}
                            smooth={true} 
                            duration={500}
                        >
                            <FaGears />
                            Funcionalidades
                        </Link>
                        <Link
                            to="plans"
                            className="item-nav-list--company bg-transparent"
                            spy={true}
                            offset={-100}
                            smooth={true} 
                            duration={500}
                        >
                            <IoMdPricetags />
                            Elije tu Plan
                        </Link>
                        <Link to="/" className="item-nav-list--company bg-transparent">
                            <MdWifiCalling3 />
                            Contáctanos
                        </Link>
                    </section>

                    <section className="sect-user-nav-list--company">
                        <Link to="/auth/login" className="item-nav-list--company bg-transparent">Iniciar Sesión</Link>
                        <Link to="/auth/register" className="item-nav-list--company bg-transparent">Registrarse</Link>
                    </section>
                </nav>
                <nav className="nav-user--company bg-transparent">
                    <Link to="/auth/login" className="btn-header--company btn-login-header--company color-white">
                        Ingresar
                    </Link>
                    <Link to="/auth/register" className="btn-header--company btn-signin-header--company color-white">
                        Únete
                    </Link>
                    <button className="btn-menu--company color-white bg-transparent" onClick={toggleMenu}>
                        <IoIosMenu />
                    </button>
                </nav>
            </header>

            <Toaster
                position="bottom-right"
                richColors
                expand
                visibleToasts={5}
            />
            <Outlet />
        </>
    )
}

export { HeaderCompany };