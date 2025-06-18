import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';

// Model
import Product from '../models/Product';

declare global {
    namespace Express {
        interface Request {
            product: Product
        }
    }
}

export const validateProductId = async (req: Request, res: Response, next: NextFunction) => {
    await param("productId")
        .isInt().withMessage("Id no válido")
        .custom(value => value > 0).withMessage("Id no válido")
        .run(req);

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return;
    } else {
        next()
    }
}

export const validateIfProductExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const product = await Product.findByPk(productId)

        if (!product) {
            const error = new Error("Producto no encontrado");
            res.status(404).json({ error: error.message });
            return;
        }
        req.product = product;

        next()
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error" })
    }
}

export const validateProductInput = async (req: Request, res: Response, next: NextFunction) => {
    await body("name")
        .notEmpty().withMessage("El nombre de producto es un dato obligatorio")
        .isLength({ min: 2 }).withMessage("El nombre del producto debe tener entre al menos 2 caracteres")
        .isLength({ max: 100 }).withMessage("El nombre del producto no puede superar los 100 caracteres")
        .run(req)
    await body("categoryId")
        .optional({ nullable: true })
        .isInt().withMessage("El id de la categoría debe ser un número entero")
        .run(req)
    await body("code")
        .notEmpty().withMessage("El código de producto es un dato obligatorio")
        .isLength({ min: 2 }).withMessage("El código del producto debe tener entre al menos 2 caracteres")
        .isLength({ max: 10 }).withMessage("El código del producto no puede superar los 100 caracteres")
        .run(req)
    await body("sellingPrice")
        .notEmpty().withMessage("El precio de venta de producto es un dato obligatorio")
        .isInt().withMessage("Precio de venta de producto no válido")
        .custom(value => value > 50).withMessage("Precio de venta de producto no válido")
        .run(req)
    await body("purchaseCost")
        .notEmpty().withMessage("El precio de costo de producto es un dato obligatorio")
        .isInt().withMessage("Precio de costo de producto no válido")
        .custom(value => value > 50).withMessage("Precio de costo de producto no válido")
        .run(req)
    await body("minimumStock")
        .optional({ nullable: true })
        .isInt().withMessage("El stock mínimo para el producto no válido")
        .custom(value => value > 0).withMessage("El stock mínimo debe ser un número entero mayor a cero")
        .run(req)
    await body("status")
        .optional({ nullable: true })
        .isString().withMessage("Estado del producto no válido")
        .run(req)
    next()
}

export const hasAccess = async (req: Request, res: Response, next: NextFunction) => {
    if(req.product.userId !== req.user.id) {
        const error = new Error("Acción no válida");
        return res.status(401).json({ error: error.message });
    }    

    next();
}