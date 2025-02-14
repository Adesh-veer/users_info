import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { EventEmitter } from 'events';
import authRoutes from './routes/auth.Routes.js';  
import userRoutes from './routes/user.Routes.js';

EventEmitter.defaultMaxListeners = 20; 

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Log requests in the terminal
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url} - Body:`, req.body);
    next();
});

// ✅ Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// ✅ Catch and log errors globally
app.use((err, req, res, next) => {
    console.error('🔥 Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
