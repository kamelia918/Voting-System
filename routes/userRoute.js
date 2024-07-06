const express=require("express");
const { RegisterUser, LogInUser, CurrentUser } = require("../controllers/userController");


const router=express.Router();


router.post("/register",RegisterUser);


router.post("/login",LogInUser);



router.get("/current",CurrentUser );


module.exports=router;