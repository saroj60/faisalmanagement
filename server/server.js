import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key-should-be-in-env';
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn('WARNING: MONGODB_URI is not defined in environment variables. Data will not persist across restarts.');
}

// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Schemas & Models
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' }
});

const demandSchema = new mongoose.Schema({
    title: { type: String, required: true },
    country: { type: String, required: true },
    startDate: String,
    endDate: String,
    salary: String,
    workers: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Demand = mongoose.model('Demand', demandSchema);

// Initial User Seeding (if not exists)
const seedAdmin = async () => {
    try {
        const count = await User.countDocuments();
        if (count === 0) {
            await User.create({
                username: 'info@faisalnepal.com',
                password: 'faisalmanagement@2026',
                role: 'admin'
            });
            console.log('Default admin user created');
        }
    } catch (err) {
        console.error('Error seeding admin user:', err);
    }
};
seedAdmin();

const allowedOrigins = [
    'http://localhost:5173',
    'https://www.faisalnepal.com.np',
    'https://faisalnepal.com.np',
    process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin) || origin.includes('vercel.app') || origin.includes('onrender.com')) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}));
app.use(bodyParser.json());

// Middleware to verify token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- AUTH ROUTES ---

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token, role: user.role });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error during login' });
    }
});

// --- DEMAND ROUTES ---

// Get all demands (Public)
app.get('/api/demands', async (req, res) => {
    try {
        const demands = await Demand.find().sort({ createdAt: -1 });
        res.json(demands);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching demands' });
    }
});

// Get single demand (Public)
app.get('/api/demands/:id', async (req, res) => {
    try {
        const demand = await Demand.findById(req.params.id);
        if (demand) {
            res.json(demand);
        } else {
            res.status(404).json({ message: 'Demand not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching demand' });
    }
});

// Create demand (Protected)
app.post('/api/demands', authenticateToken, async (req, res) => {
    const { title, country, startDate, endDate, salary, workers, description } = req.body;
    try {
        const newDemand = new Demand({
            title,
            country,
            startDate,
            endDate,
            salary,
            workers,
            description
        });
        await newDemand.save();
        res.status(201).json(newDemand);
    } catch (err) {
        res.status(500).json({ message: 'Error creating demand' });
    }
});

// Delete demand (Protected)
app.delete('/api/demands/:id', authenticateToken, async (req, res) => {
    try {
        const result = await Demand.findByIdAndDelete(req.params.id);
        if (result) {
            res.json({ message: 'Demand deleted' });
        } else {
            res.status(404).json({ message: 'Demand not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting demand' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


