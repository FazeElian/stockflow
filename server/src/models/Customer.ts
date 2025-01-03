import mongoose, { Document, Schema, Types } from "mongoose";

// Interface
export interface ICustomer extends Document {
    name: string,
    description: string,
    createdAt: Date,
    _id: Types.ObjectId
}

// Schema
const customerSchema = new Schema ({
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

const Customer = mongoose.model<ICustomer>("Customer", customerSchema);
export default Customer;