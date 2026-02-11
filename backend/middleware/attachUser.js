const jwt = require("jsonwebtoken");
const db = require("../config/db"); //to fetch user info

const attachUser = async (req, res, next) => {
  //try{

  //Vulnurable: get token from authorization header
  /*
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  */

  //Secure: read token from cookie
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    //2)Verify token signature
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //3)Fetch user from database
    //confirms user still exits and is active
    const result = await db.query(
      "SELECT id, username, role, active FROM users WHERE id=$1",
      [decoded.UserId],
    );
    //stops request without token
    if (!result.rows.length || !result.rows[0].active) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    //4)//attach user to request
    //make user info available in controllers
    req.user = result.rows[0];

    //proceed to next middleware or controller
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = attachUser;
