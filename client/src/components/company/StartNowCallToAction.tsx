import { Link } from 'react-router-dom';

// Styles for this component
import "../../assets/css/components/company/StartNowCallToAction.css";

const StartNowCallToAction = () => {
    return (
        <div className="start-now--call-to-action bg-gray-dark font-inter">
            <h1 className="bg-transparent color-white">Optimiza tu negocio en minutos</h1>
            <p className="bg-transparent color-gray">
                Optimice su inventario, ventas y gestión de clientes con nuestras herramientas intuitivas y fáciles de usar.
            </p>
            <Link
                to="/auth/register"
                className="bg-transparent btn-start-now-call-to-action color-white bg-black"
            >
                Empezar Ahora
            </Link>
        </div>
    )
}

export { StartNowCallToAction };