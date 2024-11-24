// Styles for this view
import "../../../assets/css/views/company/PricingView.css";

// Framer motion
import { motion } from 'framer-motion';

const PricingView = () => {
    return (
        <main className="content-page--company">
            <section className="choose-plan font-inter">
                <h1 className="color-white bg-transparent">Elige tu Plan</h1>
                <div className="group-choose-plan">
                    {/* Monthly */}
                    <motion.div
                        className="item-choose-plan bg-black-medium"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <h2 className="color-white bg-transparent">Plan Mensual</h2>
                        <div className="list-item-choose-plan bg-transparent">
                            <li className="color-white bg-transparent">&#10003; Reportes diarios de ventas</li>
                            <li className="color-white bg-transparent">&#10003; Exportación de reportes en formato PDF</li>
                            <li className="color-white bg-transparent">&#10003; Acceso a videos tutoriales básicos</li>
                            <li className="color-white bg-transparent">&#10003; Alertas automáticas de stock bajo</li>
                            <li className="color-white bg-transparent">&#10003; Gestión ilimitada de productos</li>
                            <li className="color-white bg-transparent">&#10003; Notificaciones por correo electrónico</li>
                        </div>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duración: </b>1 Mes</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> $49,900 COP</b> / mes</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Empezar
                        </button>
                    </motion.div>

                    {/* Semiannual */}
                    <motion.div
                        className="item-choose-plan bg-black-medium"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <h2 className="color-white bg-transparent">Plan Semestral</h2>
                        <div className="list-item-choose-plan bg-transparent">
                            <li className="color-white bg-transparent">&#10003; Reportes diarios de ventas</li>
                            <li className="color-white bg-transparent">&#10003; Exportación de reportes en formato PDF</li>
                            <li className="color-white bg-transparent">&#10003; Acceso a videos tutoriales básicos</li>
                            <li className="color-white bg-transparent">&#10003; Alertas automáticas de stock bajo</li>
                            <li className="color-white bg-transparent">&#10003; Gestión ilimitada de productos</li>
                            <li className="color-white bg-transparent">&#10003; Notificaciones por correo electrónico</li>
                        </div>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duración: </b>6 Meses</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> $249,900 COP</b> / mes</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Empezar
                        </button>
                    </motion.div>

                    {/* Annual */}
                    <motion.div
                        className="item-choose-plan bg-black-medium"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <h2 className="color-white bg-transparent">Plan Anual</h2>
                        <div className="list-item-choose-plan bg-transparent">
                            <li className="color-white bg-transparent">&#10003; Reportes diarios de ventas</li>
                            <li className="color-white bg-transparent">&#10003; Exportación de reportes en formato PDF</li>
                            <li className="color-white bg-transparent">&#10003; Acceso a videos tutoriales básicos</li>
                            <li className="color-white bg-transparent">&#10003; Alertas automáticas de stock bajo</li>
                            <li className="color-white bg-transparent">&#10003; Gestión ilimitada de productos</li>
                            <li className="color-white bg-transparent">&#10003; Notificaciones por correo electrónico</li>
                        </div>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duración: </b>1 Mes</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> $449,900 COP</b> / mes</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Empezar
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default PricingView;