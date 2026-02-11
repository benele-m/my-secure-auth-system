const express=require("express");
const router =express.Router();
const attachUser=require("../middleware/attachUser");
const isAdmin=require("../middleware/isAdmin");
const db=require("../config/db");

router.get("/user",attachUser,isAdmin,async(req,res)=>{
    const result=await db.query(
        "SELECT id, username, role, active FROM users"
    );
    res.json(result.rows);


router.patch("/users/:id/role",attachUser,isAdmin,async(req,res)=>{
    const {role}=req.body;
    const {id}=req.params;
})

await db.query(
    "UPDATE users SET role=$1 WHERE id=$2",
    [role,id]
);

res.json({message:"Role updated"});
});

module.exports=router;