const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "Token requerido para acceder a esta ruta." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "3e1f8f9352c1e5c8a11f48590d08c73d75fdbe07a9fbbc8c56a5f5dd8cb6b2fc");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado." });
    }
};

module.exports = authenticateToken;