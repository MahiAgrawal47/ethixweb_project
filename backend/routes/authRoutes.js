import express from 'express';
import { loginAdmin, verifyAdminSession } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin login
router.post('/login', loginAdmin);

// Verify admin session token
router.get('/me', protectAdmin, verifyAdminSession);

export default router;
