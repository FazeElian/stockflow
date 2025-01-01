import mongoose, { Schema, Types } from "mongoose";

// Interface
export interface IUser {
    userName: string,
    email: string,
    password: string,
    name: string,
    lastName: string,
    profilePhoto: string,
    createdAt: Date,
    _id: Types.ObjectId
}

// Schema
const userSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: false,
        trim: true,
        default: "",
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        default: "", 
    },
    profilePhoto: {
        type: String,
        required: false,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;