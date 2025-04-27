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
        .notEmpty().withMessage("El nombre de producto es obligatorio")
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