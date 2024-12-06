import { Outlet, Link } from "react-router-dom";

// React hooks
import { useState, useEffect, useRef } from "react";

// Styles for this view
import "../../assets/css/components/admin/HeaderAdmin.css";

// User dropdown component styles
import "../../assets/css/components/admin/UserDropdown.css";

// User dropdown component
import { UserDropDown } from "./UserDropDown";

// Images - icons
    // Logo
    import Logo from "../../assets/img/Logo.png";

    // Menu
    import MenuIcon from "../../assets/img/icons/Menu.png";

    // Notifications
    import NotificationsIcon from "../../assets/img/icons/Notifications.png";

    // Profile photo
    import ProfilePhotoExample from "../../assets/img/icons/ProfilePhotoExample.png";

    // Dashboard
    import { ReactComponent as DashboardIcon } from "../../assets/img/icons/Dashboard.svg";

    // Products
    import { ReactComponent as ProductsIcon } from "../../assets/img/icons/Products.svg";

    // Categories
    import { ReactComponent as CategoriesIcon } from "../../assets/img/icons/Categories.svg";

    // Inventories
    import { ReactComponent as InventoriesIcon } from "../../assets/img/icons/Inventories.svg";

    // Sales
    import { ReactComponent as SalesIcon } from "../../assets/img/icons/Sales.svg";

    // Customers
    import { ReactComponent as CustomersIcon } from "../../assets/img/icons/Customers.svg";

    // Help
    import { ReactComponent as HelpIcon } from "../../assets/img/icons/Help.svg";

const HeaderAdmin = () => {
    // Side bar states
    const [ menu, setMenu ] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu);
    }

    // Dropdown user
    const [ userDropDown, setUserDropDown ] = useState(false);
    const handleUserDropDown = () => {
        setUserDropDown(!userDropDown);
    }

    // Hook to disable menu when user scrolls a certain amount
    useEffect(() => {
        const handleScrollMenu = () => {
            const scrollThreshold = 200; // Scroll Amount
            if (window.scrollY > scrollThreshold && menu) {
                setMenu(false);
            }
        };

        window.addEventListener('scroll', handleScrollMenu); // Adding Scroll Event

        return () => {
            window.removeEventListener('scroll', handleScrollMenu);
        };
    }, [menu]);

    // Create a variable that will storage the reference of the menu
    const menuRef = useRef(null);

    // Function to handle when user clicks outside of the menu div
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenu(false);
        }
    };

    useEffect(() => {
        // Add the event listener when the component is enabled
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Clear the event listener when the component is disabled
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <aside className="side-bar--admin bg-gray-dark font-inter">
                <div className="logo-side-bar--admin bg-transparent">
                    <img src={Logo} className="bg-transparent" alt="Logo" />
                </div>
                <nav className="nav-list-side-bar--admin bg-transparent">
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin item-active-nav-list-side-bar--admin">
                        <DashboardIcon className="icon-item-nav-list-side-bar--admin" />
                        Panel Principal
                    </Link>
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin">
                        <ProductsIcon className="icon-item-nav-list-side-bar--admin" />
                        Productos
                    </Link>
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin">
                        <CategoriesIcon className="icon-item-nav-list-side-bar--admin" />
                        Categorías
                    </Link>
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin">
                        <InventoriesIcon className="icon-item-nav-list-side-bar--admin" />
                        Inventarios
                    </Link>
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin">
                        <SalesIcon className="icon-item-nav-list-side-bar--admin" />
                        Ventas
                    </Link>
                    <Link to="/admin/home" className="item-nav-list-side-bar--admin">
                        <CustomersIcon className="icon-item-nav-list-side-bar--admin" />
                        Clientes
                    </Link>
                </nav>
                <div className="cont-help-item-nav-list-side-bar--admin bg-transparent">
                    <Link className="item-nav-list-side-bar--admin item-help-side-bar--admin bg-transparent">
                        <HelpIcon className="icon-item-nav-list-side-bar--admin" />
                        Ayuda
                    </Link>
                </div>
            </aside>

            <nav className="nav-top--admin bg-gray-dark font-inter">
                <div className="cont-btn-menu-nav-top--admin bg-transparent">
                    <button className="btn-menu-nav-top--admin bg-transparent" onClick={toggleMenu}>
                        <img src={MenuIcon} className="bg-transparent" alt="" />
                    </button>
                </div>
                <div className="cont-btns-user-nav-top--admin bg-transparent">
                    <button className="btn-notifications-side-bar--admin bg-transparent">
                        <img src={NotificationsIcon} className="bg-transparent"  alt="" />
                    </button>
                    <button
                        onClick={handleUserDropDown}
                        className="btn-user-side-bar--admin bg-transparent"
                    >
                        <img src={ProfilePhotoExample} className="bg-transparent" alt="" />

                        {/* User dropdown component */}
                        {userDropDown && <UserDropDown />}
                    </button>
                </div>
            </nav>

            {/* Responsive */}
            <aside className={ `side-bar-responsive--admin ${menu ? "active": ""} bg-gray-dark font-inter` } ref={menuRef}>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <DashboardIcon className="icon-item-nav-list-side-bar--admin" />
                    Panel Principal
                </Link>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <ProductsIcon className="icon-item-nav-list-side-bar--admin" />
                    Productos
                </Link>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <CategoriesIcon className="icon-item-nav-list-side-bar--admin" />
                    Categorías
                </Link>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <InventoriesIcon className="icon-item-nav-list-side-bar--admin" />
                    Inventarios
                </Link>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <SalesIcon className="icon-item-nav-list-side-bar--admin" />
                    Ventas
                </Link>
                <Link to="/admin/home" className="item-side-bar-responsive--admin bg-transparent">
                    <CustomersIcon className="icon-item-nav-list-side-bar--admin" />
                    Clientes
                </Link>
            </aside>

            <Outlet />
        </>
    )
}

export { HeaderAdmin }; 