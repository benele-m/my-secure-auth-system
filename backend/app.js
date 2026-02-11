const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,"public")));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
