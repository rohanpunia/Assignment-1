🚀 Full-Stack Authentication App
A full-stack Node.js + React authentication application that supports:
✅ Email/password registration & login
✅ Google OAuth login
✅ Protected dashboard page
✅ User session handling
✅ Responsive & modern UI

This project uses:

Backend: Node.js, Express, MongoDB, Mongoose, Passport.js

Frontend: React, React Router, Toast notifications

Authentication: JWT & Google OAuth 2.0

📄 Features
Register with name, email & password (validations included)

Login with email & password or via Google

Passwords are hashed with bcrypt

JWT tokens stored in localStorage for session

Protected dashboard route (only accessible if logged in)

Displays logged-in user’s name on dashboard

Logout functionality

Clean, responsive & realistic UI

🔧 Installation
Prerequisites
✅ Node.js >= 18
✅ MongoDB Atlas account (or local MongoDB)
✅ Google Cloud Console project with OAuth credentials
✅ npm

Backend setup
1️⃣ Navigate to the server folder:

bash
Copy
Edit
cd login/server
2️⃣ Install dependencies:

bash
Copy
Edit
npm install
3️⃣ Create a .env file:

ini
Copy
Edit
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
4️⃣ Start the backend server:

bash
Copy
Edit
node server.js
Server runs at:
📍 http://localhost:5000

Frontend setup
1️⃣ Navigate to the client folder:

bash
Copy
Edit
cd login/client
2️⃣ Install dependencies:

bash
Copy
Edit
npm install
3️⃣ Start the frontend:

bash
Copy
Edit
npm start
App runs at:
📍 http://localhost:3000

🌟 Usage
Register
Go to /register

Enter name, email, password

Validates email & password before sending to backend

Login
Go to /login

Enter email & password

Or click Login with Google

On success, redirected to /dashboard

Dashboard
Shows a welcome message with your name

Displays a logout button

🔒 Technologies Used
Backend
Node.js — JavaScript runtime

Express — web framework

MongoDB Atlas — cloud database

Mongoose — MongoDB ODM

Passport.js — authentication middleware

bcryptjs — password hashing

jsonwebtoken (JWT) — token-based auth

dotenv — environment variables

Frontend
React — SPA frontend

React Router DOM — routing

Axios — API requests

React Toastify — notifications

CSS — styling

🐛 Troubleshooting
MongoDB Atlas connection error:
❌ Could not connect to any servers in your MongoDB Atlas cluster

Make sure you’ve whitelisted your IP address in MongoDB Atlas dashboard.

Check if your MongoDB URI & credentials are correct in .env.

Google OAuth doesn’t work:
Ensure you’ve created OAuth 2.0 credentials at Google Cloud Console.

Add http://localhost:5000/auth/google/callback to the Authorized redirect URIs in Google settings.

📜 Future Enhancements
Add password reset functionality

Add email verification

Use HTTPS & secure cookies

Add roles (admin/user) & permissions

🙌 Contributing
Pull requests are welcome. Please open an issue first to discuss what you’d like to change.

📝 License
This project is licensed under the MIT License — feel free to use it & modify!

