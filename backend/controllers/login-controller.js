const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const max_attempts = 5;
const lock_time_duration = 15;


//login
const login = async (req, res) => {
 try{
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const result = await db.query("SELECT * FROM users WHERE username=$1", [
    username,
  ]);

  //generic response => prevents user enumeration
  if (result.rows.length === 0) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const user = result.rows[0];
  //Account deactivated
  if (!user.active) {
    return res.status(403).json({ error: "Account deactivated" });
  }
  //Account locked
  if (user.locked_until && new Date(user.locked_until) > new Date()) {
    return res.status(423).json({ error: "Account temporarily locked" });
  }
  //compares password
  const isMatch = await bcrypt.compare(password, user.password);

  //wrong password
  if (!isMatch) {
    let update = {
      attempts: user.failed_attempts + 1,
      locked_until: null,
    };
    if (update.attempts >= max_attempts) {
      update.locked_until = new Date(
        Date.now() + lock_time_duration * 60 * 1000,
      );
    }
    await db.query(
      "UPDATE users SET failed_attempts=$1, locked_until=$2 WHERE id=$3",
      [update.attempts, update.locked_until, user.id],
    );
    return res.status(401).json({ error: "Invalid credentials" });
  }

  //successful login
  await db.query(
    "UPDATE users SET failed_attempts=0 , locked_until=NULL WHERE id=$1",
    [user.id],
  );

  //issue token after successful login
  const token = jwt.sign(
    { UserId:user.id, UserRole:user.role},
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRES_IN}
  );

  //set HttpOnly cookie
  res.cookie("token",token,{
    httpOnly:true,//js in browser can not read it
    secure:false,//true if https
    sameSite:"strict",//prevents CSRF via other sites
    maxAge:3600000//1hr-> expiration

  });

  return res.json({ message: "Login successful"});

   }catch(err){
     res.status(500).json({message:"Server error"});
  }
};

module.exports=login;