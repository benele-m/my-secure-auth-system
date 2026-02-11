// logout-controller.js
const logout = async (req, res) => {
  // clear cookie using exact same options as login
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,     // true if using HTTPS
    sameSite: "strict",
    path: "/",         // important to match login
  });

  return res.json({ message: "Logged out" });
};

module.exports = logout;
