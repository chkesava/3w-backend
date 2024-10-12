import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    social_media_handle: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
export default Post;
