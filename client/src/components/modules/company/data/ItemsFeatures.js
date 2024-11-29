// Images - icons
    // Dashboard
    import DashboardIcon from "../../../../assets/img/icons/Dashboard.png";

    // Products
    import ProductsIcon from "../../../../assets/img/icons/Products.png";

    // Categories
    import CategoriesIcon from "../../../../assets/img/icons/Categories.png";

    // Inventories
    import InventoriesIcon from "../../../../assets/img/icons/Inventories.png";

    // Sales
    import SalesIcon from "../../../../assets/img/icons/Sales.png";

    // Customers
    import CustomersIcon from "../../../../assets/img/icons/Customers.png";

const ItemsFeatures = {
    "Dashboard": {
        "id": 1,
        "bgColor": "blue",
        "imgSrc": DashboardIcon,
        "title": "Panel Dinámico",
        "description": "Obtenga una vista panorámica de todo su inventario con nuestro panel de control fácil de usar.",
        "detail": "Info en detalle Panel Dinámico",
        "subItems": {
            1: "Productos más vendidos",
            2: "Métricas de desempeño de ventas",
            3: "Registro de ventas diarias",
            4: "Total de ventas en cierto periodo de tiempo",
        },
    },
    "Products": {
        "id": 2,
        "bgColor": "green",
        "imgSrc": ProductsIcon,
        "title": "Gestión de Productos",
        "description": "Controle y administre su catálogo de productos de manera eficiente y centralizada.",
        "detail": "Info en detalle Productos",
        "subItems": {
            "id": 1,
            1: "Agrega, edita o elimina productos fácilmente",
            2: "Gestión de variantes de color, talla y otros atributos",
            3: "Información detallada de cada producto",
            4: "Gestión centralizada de tu catálogo",
        },
    },
    "Categories": {
        "id": 3,
        "bgColor": "brown",
        "imgSrc": CategoriesIcon,
        "title": "Organización por Categorías",
        "description": "Clasifique sus productos para facilitar búsquedas, organización y análisis detallado.",
        "detail": "Info en detalle Categorías",
        "subItems": {
            1: "Clasificación personalizada de productos",
            2: "Exploración rápida con filtros por categoría",
            3: "Análisis de ventas por categoría",
            4: "Visualización de productos asociados a cada categoría",
        },
    },
    "Inventories": {
        "id": 4,
        "bgColor": "red",
        "imgSrc": InventoriesIcon,
        "title": "Control de Inventarios",
        "description": "Supervise y actualice su inventario para evitar faltantes o excedentes.",
        "detail": "Info en detalle Inventarios",
        "subItems": {
            1: "Control preciso de entradas y salidas",
            2: "Seguimiento de niveles de stock mínimos",
            3: "Alertas automáticas de bajo inventario",
            4: "Visualización rápida de productos agotados",
        },
    },
    "Sales": {
        "id": 5,
        "bgColor": "purple",
        "imgSrc": SalesIcon,
        "title": "Registro de Ventas",
        "description": "Lleve un seguimiento detallado de sus ventas para maximizar ingresos y mejorar la toma de decisiones.",
        "detail": "Info en detalle Ventas",
        "subItems": {
            1: "Productos más vendidos",
            2: "Métricas de desempeño de ventas",
            3: "Registro de ventas diarias",
            4: "Total de ventas en cierto periodo de tiempo",
        },
    },
    "Customers": {
        "id": 6,
        "bgColor": "pink",
        "imgSrc": CustomersIcon,
        "title": "Gestión de Clientes",
        "description": "Mantenga un registro de sus clientes frecuentes y fortalezca sus relaciones comerciales.",
        "detail": "Info en detalle Clientes",
        "subItems": {
            1: "Historial de ventas entre periodos de tiempo",
            2: "Reportes sobre clientes más rentables",
            3: "Detección de clientes con mayor potencial de crecimiento",
            // 4: "Total de ventas en cierto periodo de tiempo",
        },
    },
};

export default ItemsFeatures;