// React hooks
import { useRef, useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion';

// Styles for this component
import "../../assets/css/components/company/AppDetailedFeatures.css";

// Items
import ItemsFeatures from './data/ItemsFeatures';

const AppDetailedFeatures = () => {
    // States for selected item
    const [ selectedItem, setSelectedItem ] = useState("Dashboard");

    // Detail item container reference
    const detailSection = useRef(null);

    const handleItem = (key) => {
        // change state of selected item to show it
        setSelectedItem(key);

        // Scroll to detail section by coords
        detailSection.current.scrollIntoView({
            top: -10,
            behavior: 'smooth',
        });
    };

    return (
        <section className="features font-inter bg-transparent">
            <div className="top-features bg-transparent">
                <h1 className="color-white bg-transparent">Soluciones poderosas para impulsar su negocio</h1>
                <p className="color-gray bg-transparent">
                    Descubra cómo StockFlow le ayuda a gestionar mejor su inventario y a trabajar más eficientemente.
                </p>
            </div>
        
            <div className="group-features">
                {Object.entries(ItemsFeatures).map(([key, item]) => (
                    <motion.button
                        key={item.id}
                        className={`item-group-features ${selectedItem === key ? "active" : ""} bg-gray-dark`}
                        onClick={() => handleItem(key)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: item.id * 0.2,
                            ease: [0, 0.7, 0.2, 1],
                        }}
                    >
                        <div className="top-item-group-features bg-transparent font-inter">
                            <div className={`icon-top-item-group-features bg-${item.bgColor}`}>
                                <img
                                    className="bg-transparent"
                                    src={item.imgSrc}
                                    alt={key}
                                />
                            </div>
                            <h2 className="color-white bg-transparent">{item.title}</h2>
                        </div>
                        <p className="color-gray bg-transparent font-inter">{item.description}</p>
                    </motion.button>
                ))}
            </div>

            <motion.div
                className="detail-item-features bg-gray-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [-100, 0] }}
                transition={{ delay: 1.5, duration: 0.7, }}
                ref={detailSection}
            >
                <div className="top-detail-item-features bg-transparent">
                    <h2 className="color-white bg-transparent">
                        {ItemsFeatures[selectedItem].title}
                    </h2>
                    <p className="color-gray bg-transparent">
                        {ItemsFeatures[selectedItem].description}
                    </p>
                </div>
                <ul className="list-detail-item-features bg-transparent color-white">
                    <div className="col-list-detail-item-features bg-transparent">
                        <li className="item-list-detail-item-features bg-transparent">
                            ✅ {ItemsFeatures[selectedItem].subItems["1"]}
                        </li>
                        <li className="item-list-detail-item-features bg-transparent">
                            ✅ {ItemsFeatures[selectedItem].subItems["2"]}
                        </li>
                    </div>
                    <div className="col-list-detail-item-features bg-transparent">
                        <li className="item-list-detail-item-features bg-transparent">
                            ✅ {ItemsFeatures[selectedItem].subItems["3"]}
                        </li>
                        <li className="item-list-detail-item-features bg-transparent">
                            ✅ {ItemsFeatures[selectedItem].subItems["4"]}
                        </li>
                    </div>
                </ul>
            </motion.div>
        </section>
    )
}

export { AppDetailedFeatures };