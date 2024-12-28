import { CorsOptions } from "cors";

export const CORSConfig : CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.VITE_URL) {
            callback(null, true);
        } else {
            callback(new Error("Error de CORS"));
        }
    }
}