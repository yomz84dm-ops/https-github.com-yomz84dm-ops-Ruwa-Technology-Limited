import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const APP_URL = process.env.APP_URL || 'http://localhost:3000';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: NODE_ENV,
    appUrl: APP_URL,
    timestamp: new Date().toISOString(),
    geminiConfigured: !!GEMINI_API_KEY
  });
});

// API config endpoint
app.get('/api/config', (req, res) => {
  res.status(200).json({
    appUrl: APP_URL,
    environment: NODE_ENV,
    port: PORT,
    geminiConfigured: !!GEMINI_API_KEY
  });
});

// Serve React app for all other routes (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Error loading application');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: NODE_ENV === 'production' ? 'An error occurred' : err.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║    Ruwa Technology Limited - Production Server Started      ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ Server running on port: ${PORT}`);
  console.log(`║ Environment: ${NODE_ENV}`);
  console.log(`║ App URL: ${APP_URL}`);
  console.log(`║ Gemini API Key: ${GEMINI_API_KEY ? '✓ Configured' : '✗ NOT CONFIGURED'}`);
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║ Health Check: ${APP_URL}/health`);
  console.log(`║ API Config: ${APP_URL}/api/config`);
  console.log('╚════════════════════════════════════════════════════════════╝\n');
});
