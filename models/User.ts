import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select : false,
    },
    role: {
        type: String,
        default: "user",
    },
    image:{
        type: String,
    },
    authProviderId: {
        type: String,
    },
});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);