import Post from '../models/Post.js';

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { name, social_media_handle, image_url } = req.body;

        // Create a new post without created_by field
        const newPost = new Post({
            name,
            social_media_handle,
            image_url
        });

        await newPost.save();

        res.status(201).json({
            status: 'success',
            message: 'Post created successfully',
            data: newPost,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error creating post',
        });
    }
};

// Admin - Retrieve all posts
export const getAllPosts = async (req, res) => {
    try {
        // Retrieve all posts
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            data: posts,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching posts',
        });
    }
};
