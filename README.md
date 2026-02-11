🔐 Secure Authentication System

A production-structured authentication system built with Node.js, Express, and PostgreSQL, implementing secure user registration and login with industry-standard security practices.

Designed to demonstrate backend architecture, secure credential handling, and real-world authentication flow.

* Features

✅ User Registration

✅ User Login

✅ Password hashing using bcrypt

✅ JWT-based authentication

✅ Environment variable protection with .env

✅ PostgreSQL database integration

✅ MVC-style folder structure (Routes, Controllers, Config)

✅ Secure secret management (no credentials exposed)


* Project Architecture
> my-Secure-Auth-System/
> backend/
> Routes/
> Controllers/     
> config/
> db.js
> public/
> login.html
> register.html
> app.js,
> server.js,
> .env (ignored),
> package.json,

> README.md


* Architecture Flow

Frontend (HTML forms)
⬇
Express Routes
⬇
Controllers (Business Logic)
⬇
PostgreSQL Database


* 🔐 Security Implementation

This project follows secure backend principles:

🔒 Passwords are hashed using bcrypt

🔑 Authentication uses JSON Web Tokens (JWT)

🌍 Environment variables stored in .env (never committed)

🛡️ SQL injection protection using parameterized queries

🚫 node_modules excluded from repository

🚫 Secrets removed from Git history after initial leak (real-world security lesson applied)


* 🛠️ Tech Stack

Node.js

Express.js

PostgreSQL

bcrypt

jsonwebtoken

dotenv


* ⚙️ Installation & Setup
1) Clone the Repository
git clone https://github.com/YOUR_USERNAME/secure-auth-system.git
cd secure-auth-system/backend

2) Install Dependencies
npm install

3) Create Environment File

Create a .env file inside /backend:

DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_super_secret_key

4) Start the Server
npm start


Server runs at:

http://localhost:3000


* 📌 What This Project Demonstrates

This project demonstrates my ability to:

Design backend systems with proper separation of concerns

Implement secure authentication mechanisms

Manage environment variables securely

Handle Git security mistakes professionally

Structure scalable Express applications

Connect backend services to relational databases


* Lessons Applied

During development, I encountered and resolved:

Accidental exposure of .env file

Removal of sensitive files from Git tracking

Proper dependency management using .gitignore

This reflects real-world DevOps awareness and secure development practices.


* 📈 Future Improvements

Add refresh tokens

Implement role-based access control (RBAC)

Add rate limiting

Add email verification

Deploy live on Render / Railway

Dockerize the application


* Author

Benele Mamba
Computer Science Student
Passionate about backend engineering, security, and system design.
