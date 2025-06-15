import { motion } from 'framer-motion';
import { Element } from "react-scroll";

// Styles for this view
import "../../assets/css/components/company/ChooseYourPlan.css";

// Items
import ItemsChooseYourPlan from './../../lib/lists/ItemsChooseYourPlan';

const ChooseYourPlan = () => {
    return (
        <Element className="choose-plan font-inter" name="plans">
            <h1 className="color-white bg-transparent">Elige tu plan ideal</h1>
            <div className="group-choose-plan">
                {/* Items */}
                {ItemsChooseYourPlan.map((item) => (
                    <motion.div
                        className="item-choose-plan bg-black-medium"
                        key={item.id}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <h2 className="color-white bg-transparent">{item.title}</h2>
                        <div className="list-item-choose-plan bg-transparent">
                            <li className="color-white bg-transparent">&#10003; Informes diarios de ventas</li>
                            <li className="color-white bg-transparent">&#10003; Exportación de informes en PDF</li>
                            <li className="color-white bg-transparent">&#10003; Acceso a tutoriales básicos en vídeo</li>
                            <li className="color-white bg-transparent">&#10003; Reciba alertas automáticas cuando se agote el stock de productos</li>
                            <li className="color-white bg-transparent">&#10003; Gestión de productos ilimitada para expandir su negocio</li>
                            <li className="color-white bg-transparent">&#10003; Notificaciones por correo electrónico</li>
                        </div>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duración: </b>{item.duration}</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> ${item.price} </b> / mes</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Seleccionar Plan
                        </button>
                    </motion.div>
                ))}
            </div>
        </Element>
    )
}

export { ChooseYourPlan };