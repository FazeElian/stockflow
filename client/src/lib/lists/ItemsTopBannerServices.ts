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
import type { ItemTopBannerServices } from "../types/item-top-banner-services.type";

const ItemsTopBannerServices: ItemTopBannerServices[] = [
    {
        id: 1,
        imgSrc: DashboardIcon,
        delay: 0,
        title: "Panel",
        class: "bg-blue circle-dashboard-btm-banner-services",
    },
    {
        id: 2,
        imgSrc: ProductsIcon,
        delay: .20,
        title: "Productos",
        class: "bg-green circle-products-btm-banner-services",
    },
    {
        id: 3,
        imgSrc: CategoriesIcon,
        delay: .40,
        title: "Categorías",
        class: "bg-brown circle-categories-btm-banner-services",
    },
    {
        id: 4,
        imgSrc: InvoicesIcon,
        delay: .60,
        title: "Facturación",
        class: "bg-red circle-invoices-btm-banner-services",
    },
    {
        id: 5,
        imgSrc: SalesIcon,
        delay: .80,
        title: "Ventas",
        class: "bg-purple circle-sales-btm-banner-services",
    },
    {
        id: 6,
        imgSrc: CustomersIcon,
        delay: 1,
        title: "Clientes",
        class: "bg-pink circle-customers-btm-banner-services",
    },
];

export default ItemsTopBannerServices;