🔐 Secure Authentication System
Backend authentication system built with Node.js, Express, and PostgreSQL, implementing secure user registration and login using industry-standard practices.

* Features
Secure user registration & login
Password hashing with bcrypt
JWT-based authentication
PostgreSQL integration
Environment variable protection (.env)
MVC-style backend structure
Parameterized queries (SQL injection protection)

🏗️ Architecture
Routes → API endpoints
Controllers → Business logic
Config → Database connection
Public → Frontend (HTML)
Database → PostgreSQL
Flow:
Frontend → Express Routes → Controllers → Database

🛠️ Tech Stack
Node.js
Express.js
PostgreSQL
bcrypt
jsonwebtoken
dotenv

⚙️ Setup
Bash
Copy code
git clone https://github.com/YOUR_USERNAME/secure-auth-system.git
cd secure-auth-system/backend
npm install
npm start
Create a .env file inside /backend:
Copy code

DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret