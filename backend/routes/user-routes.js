const express = require("express");
const attachUser = require("../middleware/attachUser");

const router = express.Router();

router.get("/profile", attachUser, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    role: req.user.role,
    active: req.user.active,
  });
});

module.exports = router;
