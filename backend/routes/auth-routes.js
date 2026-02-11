//this file does not care how registration works, just maps 

const express=require("express");
const register=require("../controllers/register-controller");
const login=require("../controllers/login-controller");
const logout=require("../controllers/logout-controller");

const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);

module.exports=router;