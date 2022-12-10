import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            min: 5,
            required: true,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transaction: Array,
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"],
            default: "admin"
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

export default User;