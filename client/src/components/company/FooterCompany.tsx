import { Link } from 'react-router-dom';

// Styles for this component
import "../../assets/css/components/company/FooterCompany.css";

// Logo
import Logo from "../../assets/img/Logo.png";

import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

interface FooterCompanyProps {
    bgColor: string
}

// Functional component -> React.FC
const FooterCompany : React.FC<FooterCompanyProps> = (props) => {
    return (
        <footer className={ `footer-company font-inter ${props.bgColor}` }>
            <div className="items-footer-company bg-transparent">
                <div className="item-footer-company about-footer-company bg-transparent">
                    <img src={Logo} className="bg-transparent" alt="" />
                    <p className="color-gray bg-transparent">
                        StockFlow es una solución en gestión de inventario y ventas para
                        pequeñas y medianas empresas. 
                    </p>
                </div>
                <div className="item-footer-company quick-links-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Enlaces Rápidos</h2>
                    <ul className="bg-transparent list-links-footer-company">
                        <Link to="/" className="bg-transparent color-gray">Inicio</Link>
                        <Link to="/" className="bg-transparent color-gray">Funcionalidades</Link>
                        <Link to="/pricing" className="bg-transparent color-gray">Elije tu Plan</Link>
                        <Link to="/" className="bg-transparent color-gray">Contáctanos</Link>
                    </ul>
                </div>
                <div className="item-footer-company quick-links-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Legal</h2>
                    <ul className="bg-transparent list-links-footer-company">
                        <Link to="/" className="bg-transparent color-gray">Términos y Condiciones</Link>
                        <Link to="/" className="bg-transparent color-gray">Política de Privacidad</Link>
                    </ul>
                </div>
                <div className="item-footer-company connect-with-us-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Encuéntranos en:</h2>
                    <ul className="bg-transparent">
                        <Link to="/" className="item-connect-with-us bg-transparent">
                            <FaInstagram />
                            <h2 className="color-white bg-transparent">stockflow</h2>
                        </Link>
                        <Link to="/" className="item-connect-with-us bg-transparent">
                            <FaFacebookSquare />
                            <h2 className="color-white bg-transparent">StockFlow</h2>
                        </Link>
                        <Link to="/" className="item-connect-with-us bg-transparent">
                            <RiTwitterXFill />
                            <h2 className="color-white bg-transparent">@stockflow</h2>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="rights-footer-company bg-transparent color-gray">
                © 2024 StockFlow. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export { FooterCompany };