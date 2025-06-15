// Images - Icons
    // Dashboard
    import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";

    // Products
    import { BsBoxSeam as ProductsIcon } from "react-icons/bs";

    // Categories
    import { TbCategory as CategoriesIcon } from "react-icons/tb";

    // Invoices
    import { LiaFileInvoiceSolid as InvoicesIcon } from "react-icons/lia";

    // Sales
    import { IoCartOutline as SalesIcon } from "react-icons/io5";

    // Customers
    import { BsPeople as CustomersIcon } from "react-icons/bs";

// Type
import type { ItemMainFeatures } from "../types/item-main-features";

const ItemsMainFeatures: ItemMainFeatures[] = [
    {
        id: 1,
        imgSrc: DashboardIcon,
        title: "Panel",
        description: "Obtén una visión general de tu negocio con estadísticas, análisis detallados e informes personalizados, todo en un solo lugar.",
    },
    {
        id: 2,
        imgSrc: ProductsIcon,
        title: "Productos",
        description: "Gestiona tu stock con precisión, evita faltantes y organiza los productos con detalles como código, nombre, categoría y precio.",
    },
    {
        id: 3,
        imgSrc: CategoriesIcon,
        title: "Categorías",
        description: "Ordena y organiza tus productos por categoría para facilitar la navegación y la gestión de tu inventario, haciéndolo más eficiente.",
    },
    {
        id: 4,
        imgSrc: InvoicesIcon,
        title: "Facturación",
        description: "Crea, edita y organiza facturas con datos claros, integrando clientes, productos y totales automáticamente.",
    },
    {
        id: 5,
        imgSrc: SalesIcon,
        title: "Ventas",
        description: "Registra, monitoriza y analiza tus ventas intuitivamente, asegurándote de maximizar tus ingresos y la satisfacción de tus clientes.",
    },
    {
        id: 6,
        imgSrc: CustomersIcon,
        title: "Clientes",
        description: "Gestiona la información de tus clientes de forma eficiente: almacena datos clave, vincúlalos con tus ventas e identifica patrones de compra.",
    },
];

export default ItemsMainFeatures;