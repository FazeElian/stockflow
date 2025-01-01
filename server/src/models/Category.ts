import mongoose, { Schema, Types } from "mongoose";

// Interface
export interface ICategory {
    name: string,
    description: string,
    createdAt: Date,
    _id: Types.ObjectId
}

// Schema
const categorySchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
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