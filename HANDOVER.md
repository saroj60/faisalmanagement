# Handover Details: Faissal Management Website

This document contains the essential information for the handover of the "Faissal Management" website to the client.

## 1. Admin Access
The website includes an administrative dashboard to manage job demands.

*   **Login URL:** `https://faisalnepal.com.np/admin/login`
*   **Username:** `info@faisalnepal.com`
*   **Password:** `faisalmanagement@2026`

> [!IMPORTANT]
> It is highly recommended that the client changes this password after the first login for security purposes.

## 2. Technology Stack
*   **Frontend:** React.js (Vite)
*   **Backend:** Node.js (Express)
*   **Database:** MongoDB Atlas (Cloud Database)
*   **Styling:** Tailwind CSS

## 3. Hosting & Deployment
The website is currently configured for deployment on **Render** or **Nest Nepal (cPanel)**.

### Live URLs:
*   **Main Domain:** [faisalnepal.com.np](https://faisalnepal.com.np)
*   **WWW Version:** [www.faisalnepal.com.np](https://www.faisalnepal.com.np)

### Environment Variables (Required for Server):
| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | Connection string for MongoDB Atlas |
| `SECRET_KEY` | Random string for JWT authentication security |
| `FRONTEND_URL` | The URL of the frontend (for CORS) |
| `NODE_ENV` | Set to `production` |

## 4. Key Project Files
*   `server/server.js`: The main backend logic and database connection.
*   `src/pages/admin/`: Contains the admin dashboard components.
*   `DEPLOY.md`: Detailed instructions for deploying to cPanel or Render.

## 5. Troubleshooting (Current Login Issue)

If you see an "Invalid credentials" error on the live site, it may be masking a server-side issue.

> [!WARNING]
> **Current Diagnosis:** The live backend at `faisalmanagement.onrender.com` is currently returning a **500 Internal Server Error**. This is preventing logins and also stopping the Demands page from loading data.

### Most Likely Cause:
The **`MONGODB_URI`** environment variable on Render is likely missing or incorrect. This prevents the server from connecting to the database.

### How to Fix:
1.  Log in to your **Render Dashboard**.
2.  Select the **`faissal-management`** web service.
3.  Go to **Environment**.
4.  Ensure `MONGODB_URI` is set to your MongoDB Atlas connection string (e.g., `mongodb+srv://user:password@cluster.mongodb.net/dbname`).
5.  Ensure `0.0.0.0/0` is whitelisted in your **MongoDB Atlas Network Access** settings.
6.  **Restart** the service on Render.

## 6. Maintenance
*   **Adding/Editing Demands:** Use the Admin Dashboard at `/admin/login`.
*   **Form Submissions:** Contact form and employer form data are currently configured to redirect to WhatsApp for immediate notification.
