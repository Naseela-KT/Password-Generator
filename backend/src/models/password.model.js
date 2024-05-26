import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Password", passwordSchema);
