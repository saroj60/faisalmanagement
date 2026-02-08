import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your-secret-key-should-be-in-env';

app.use(cors());
app.use(bodyParser.json());

// Helper to read/write JSON files
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const DEMANDS_FILE = path.join(DATA_DIR, 'demands.json');

const readData = (file) => {
    if (!fs.existsSync(file)) return [];
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data || '[]');
};

const writeData = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

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

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const users = readData(USERS_FILE);

    // Simple plain text password check for demo purposes as requested
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// --- DEMAND ROUTES ---

// Get all demands (Public)
app.get('/api/demands', (req, res) => {
    const demands = readData(DEMANDS_FILE);
    res.json(demands);
});

// Get single demand (Public)
app.get('/api/demands/:id', (req, res) => {
    const demands = readData(DEMANDS_FILE);
    const demand = demands.find(d => d.id === parseInt(req.params.id));
    if (demand) {
        res.json(demand);
    } else {
        res.status(404).json({ message: 'Demand not found' });
    }
});

// Create demand (Protected)
app.post('/api/demands', authenticateToken, (req, res) => {
    const { title, country, startDate, endDate, salary, workers, description } = req.body;
    const demands = readData(DEMANDS_FILE);

    const newDemand = {
        id: Date.now(),
        title,
        country,
        startDate,
        endDate,
        salary,
        workers,
        description,
        createdAt: new Date().toISOString()
    };

    demands.push(newDemand);
    writeData(DEMANDS_FILE, demands);

    res.status(201).json(newDemand);
});

// Delete demand (Protected) - Optional but good to have
app.delete('/api/demands/:id', authenticateToken, (req, res) => {
    let demands = readData(DEMANDS_FILE);
    const initialLength = demands.length;
    demands = demands.filter(d => d.id !== parseInt(req.params.id));

    if (demands.length < initialLength) {
        writeData(DEMANDS_FILE, demands);
        res.json({ message: 'Demand deleted' });
    } else {
        res.status(404).json({ message: 'Demand not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
