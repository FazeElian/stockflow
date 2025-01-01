
// Styles for this view
import "../../assets/css/components/company/ChooseYourPlan.css";

// Framer motion
import { motion } from 'framer-motion';

// Items
import ItemsChooseYourPlan from './../../utils/ItemsChooseYourPlan';

// React scroll
import { Element } from "react-scroll";

const ChooseYourPlan = () => {
    return (
        <Element className="choose-plan font-inter" name="plans">
            <h1 className="color-white bg-transparent">Elige tu Plan</h1>
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
                        <li className="color-white bg-transparent">&#10003; Reportes diarios de ventas</li>
                            <li className="color-white bg-transparent">&#10003; Exportación de reportes en formato PDF</li>
                            <li className="color-white bg-transparent">&#10003; Acceso a videos tutoriales básicos</li>
                            <li className="color-white bg-transparent">&#10003; Alertas automáticas de stock bajo</li>
                            <li className="color-white bg-transparent">&#10003; Gestión ilimitada de productos</li>
                            <li className="color-white bg-transparent">&#10003; Notificaciones por correo electrónico</li>
                        </div>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duración: </b>{item.duration}</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> ${item.price} COP</b> / mes</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Empezar
                        </button>
                    </motion.div>
                ))}
            </div>
        </Element>
    )
}

export { ChooseYourPlan };