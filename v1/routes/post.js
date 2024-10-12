import express from 'express';
import { createPost, getAllPosts } from '../controllers/post.js';
import { Verify, VerifyRole } from '../middleware/verify.js';

const router = express.Router();

// Route for users to create a post
router.post('/create', createPost);

// Admin route to retrieve all posts
router.get('/all', Verify, VerifyRole, getAllPosts);

export default router;
