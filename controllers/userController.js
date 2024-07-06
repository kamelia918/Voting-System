const asyncHandler=require("express-async-handler");

//@desc register a user
//@route Post/api/users/register
//@access public

const RegisterUser=asyncHandler(async(req,res)=>{
    res.json({message:"Register the user"});
});


//@desc login a user
//@route Post/api/users/login
//@access public

const LogInUser=asyncHandler(async(req,res)=>{
    res.json({message:"Login the user"});
});

//@desc current  user
//@route Post/api/users/current
//@access private

const CurrentUser=asyncHandler(async(req,res)=>{
    res.json({message:"Current user info"});
});


module.exports={RegisterUser,LogInUser,CurrentUser};
