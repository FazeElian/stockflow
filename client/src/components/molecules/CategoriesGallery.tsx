import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/services/categories/CategoriesGallery.css";

// React icons
import { MdDelete } from "react-icons/md";
import { PiBooksLight } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

const CategoriesGallery = () => {
    return (
        <section className="categories-gallery">
            <div className="item-categories-gallery item-green-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <div className="item-categories-gallery item-blue-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <div className="item-categories-gallery item-yellow-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <div className="item-categories-gallery item-red-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <div className="item-categories-gallery item-pink-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
            <div className="item-categories-gallery item-purple-categories-gallery">
                <div className="icon-item-categories-gallery">
                   <PiBooksLight /> 
                </div>
                <h2>Libros de literatura</h2>
                <h3><b>Cantidad de productos:</b> 20</h3>
                <div className="actions-item-category-gallery">
                    <Link to="" className="btn-item-category-gallery btn-edit-category-gallery">
                        <TbEdit />
                    </Link>
                    <button className="btn-item-category-gallery btn-delete-category-gallery">
                        <MdDelete />
                    </button>
                </div>
            </div>
        </section>
    )
}

export { CategoriesGallery };