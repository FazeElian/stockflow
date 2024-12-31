import mongoose, { Schema} from "mongoose";

// Interface
export interface ICategory {
    name: string,
    description: string,
    createdAt: Date,
}

// Schema
const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
        default: "Sin descripción", 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;