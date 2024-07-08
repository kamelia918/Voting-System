const express=require("express");
const { RegisterUser, LogInUser, CurrentUser } = require("../controllers/userController");
const ValidateToken = require("../middlewares/ValidateTokenHandler");


const router=express.Router();


router.post("/register",RegisterUser);


router.post("/login",LogInUser);



router.get("/current", ValidateToken, CurrentUser );


module.exports=router;