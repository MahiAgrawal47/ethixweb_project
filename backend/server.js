import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Root & Health Check APIs (support /, /health, /api, and /api/health)
app.get(['/', '/health', '/api', '/api/health'], (req, res) => {
  res.status(200).json({
    success: true,
    status: 'online',
    service: 'Ethixweb Backend API',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'offline (memory fallback active)',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      leads: '/api/leads',
      auth: '/api/auth/login'
    }
  });
});

// Mount Routes
app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);

// 404 Handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`
  });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.message);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      message: messages.join('. ')
    });
  }

  // Mongoose CastError (e.g. invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid resource identifier format.'
    });
  }

  // JWT Errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid authorization token.'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Authorization token has expired. Please log in again.'
    });
  }

  // Generic internal server error - never expose stack trace or sensitive info
  return res.status(err.status || 500).json({
    success: false,
    message: 'An internal server error occurred. Please try again later.'
  });
});

// Initialize database and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`[Ethixweb Backend] Server actively running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('[Ethixweb Backend] Critical Startup Error:', error.message);
    process.exit(1);
  }
};

startServer();
