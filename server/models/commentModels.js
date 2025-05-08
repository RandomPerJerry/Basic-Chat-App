import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true  
    }
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);