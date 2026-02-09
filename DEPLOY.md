# Deployment Guide for Nest Nepal (cPanel)

This guide explains how to deploy your "Faissal Management" application to Nest Nepal using cPanel. The application is configured as a "monolith" where the Node.js backend serves the React frontend, simplifying deployment.

## Prerequisites

1.  **cPanel Hosting** with **Node.js** support (Nest Nepal offers this).
2.  Access to your cPanel account.
3.  The project files on your local machine.

## Step 1: Prepare the Build

1.  Open your project in VS Code or terminal.
2.  Run the build command to generate the production frontend files:
    ```bash
    npm run build
    ```
    This creates a `dist` folder in your project root.

## Step 2: Organize Files for Upload

You need to upload the backend code and the built frontend code.

1.  Create a ZIP file containing:
    *   The `server` folder
    *   The `dist` folder
    *   (Do NOT include `node_modules` folders)

## Step 3: Deployment in cPanel

1.  **Log in to cPanel.**
2.  **Go to "Setup Node.js App".**
3.  **Click "Create Application".**
    *   **Node.js Version:** Select a recent version (e.g., 18.x or 20.x).
    *   **Application Mode:** Production.
    *   **Application Root:** `faissal-app` (or any name you like).
    *   **Application URL:** Select your domain (e.g., `yourdomain.com`).
    *   **Application Startup File:** `server/server.js` (Important: type this path correctly).
4.  **Click "Create".**

## Step 4: Upload Files

1.  **Go to File Manager** in cPanel.
2.  Navigate to the folder created for your app (e.g., `faissal-app`).
3.  **Upload** your ZIP file and **Extract** it here.
4.  Ensure your directory structure looks like this inside `faissal-app`:
    *   `server/`
    *   `dist/`

## Step 5: Install Dependencies (Backend)

1.  In the "Setup Node.js App" page, scroll down.
2.  You might see a button **"Run NPM Install"**.
    *   *Note:* This button often looks for `package.json` in the root. Since our `package.json` is in `server/`, you may need to enter the virtual environment via SSH or Terminal in cPanel.

    **Alternative (Easier on cPanel):**
    1.  Go to **Terminal** in cPanel.
    2.  Type: `cd faissal-app/server`
    3.  Type: `npm install`

## Step 6: Restart & Test

1.  Go back to **Setup Node.js App**.
2.  Click **Restart Application**.
3.  Open your website URL. You should see your application running!

## Troubleshooting

*   **Images not loading:** Check if `dist` folder has the assets.
*   **API Errors:** Check `server/server.js` logs (often in `stderr.log` in the app root).
*   **Database:** The app uses JSON files in `server/data`. These files are preserved on the server. If you redeploy, be careful not to overwrite `server/data` if you want to keep existing data.
