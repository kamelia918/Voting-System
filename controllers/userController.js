const asyncHandler=require("express-async-handler");
const User=require("../models/userModel");
//to protect user password
const bcrypt=require("bcrypt");
const { use } = require("../routes/candidateRoute");
const jwt=require("jsonwebtoken");


//@desc register a user
//@route Post/api/users/register
//@access public

const RegisterUser=asyncHandler(async(req,res)=>{
    const{username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const UserExist= await User.findOne({email});
    if(UserExist){
        res.status(400);
        throw new Error("you are already registed ! log in");
    }
    //Hash password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log("Hashed Password is",hashedPassword);
    const user=await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log("user created succesfuly ! ",user);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message:"Register the user"});
});


//@desc login a user
//@route Post/api/users/login
//@access public

const LogInUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user=await User.findOne({email});
    //compared password with hashed password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },process.env.ACESS_TOKEN_SECRET,
        {expiresIn:"5m"},
    )
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc current  user
//@route Post/api/users/current
//@access private

const CurrentUser=asyncHandler(async(req,res)=>{
    res.json({message:"Current user info"});
});


module.exports={RegisterUser,LogInUser,CurrentUser};
