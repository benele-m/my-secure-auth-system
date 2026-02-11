const db = require("../db");
const bcrypt = require("bcrypt");

// REGISTER
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );

    if (existing.rows.length) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashed,
    ]);

    res.json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Server error" + err.message });
  }
};

module.exports = register;
