// API base URL:
// - In development: empty string so Vite proxy handles /api/* → http://localhost:5000
// - In production: points to the deployed Render backend
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export default API_BASE_URL;
