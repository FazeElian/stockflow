import { Link } from "react-router-dom"
import { Element } from "react-scroll"

// Styles
import "../../assets/css/components/company/ContactUs.css";

// React icons
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

const ContactUs = () => {
    return (
        <Element className="contact-us font-inter" name="contact-us">
            <div className="social-media-contact">
                <h1 className="color-white">Información de contacto</h1>
                <p className="color-gray">
                    No dudes en contactarnos en cualquier momento.
                    ¡Le responderemos lo antes posible!
                </p>

                <h2 className="color-white">Correo Electrónico: </h2>
                <h4 className="color-gray">stockflow@example.com</h4>

                <h2 className="color-white">Número Celular: </h2>
                <h4 className="color-gray">+1 9999999999</h4>

                <ul className="social-media-items-contact">
                    <Link to="https://www.whatsapp.com/">
                        <FaWhatsapp />
                    </Link>
                    <Link to="https://www.facebook.com/">
                        <FaFacebookSquare />
                    </Link>
                    <Link to="https://www.instagram.com/">
                        <FaInstagram />
                    </Link>
                    <Link to="https://x.com/">
                        <RiTwitterXFill />
                    </Link>
                </ul>
            </div>
            <form action="" className="form-contact">
                <h1 className="color-white">Envíanos un mensaje</h1>

                <div className="form-contact-group">
                    <label htmlFor="name" className="color-white">Nombre</label>
                    <input
                        type="text"
                        className="font-inter color-white"
                        name="name"
                        id="name"
                        placeholder="Nombre Completo"
                        required
                    />
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Correo Electrónico</label>
                    <input
                        type="email"
                        className="font-inter color-white"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Asunto</label>
                    <select
                        className="font-inter color-gray"
                        name="subject"
                        id="subject"
                        required
                    >
                        <option className="bg-black" defaultValue="">Motivo de contacto</option>
                        <option value="" className="bg-black">Consulta general</option>
                        <option value="" className="bg-black">Información del producto</option>
                        <option value="" className="bg-black">Facturación y pagos</option>
                        <option value="" className="bg-black">Oportunidades de colaboración</option>
                    </select>
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        className="color-gray font-inter"
                        placeholder="Deja tu mensaje aquí"
                        required
                    />
                </div>

                <button className="btn-submit-contact font-inter bg-black-light color-white" type="submit">
                    Enviar mensaje
                </button>
            </form>
        </Element>
    )
}

export { ContactUs }