// const asyncHandler=require("express-async-handler");
// const jwt=require("jsonwebtoken");


// const ValidateToken=asyncHandler(async(req,res,next)=>{
//     let Token;
//     let authHeader=req.header.Authorization || req.header.authorization;
//     if(authHeader && authHeader.startsWith("Bearer")){
//         Token=authHeader.split(" ")[1];
//         jwt.verify(Token,process.env.ACESS_TOKEN_SECRET,(err,decoded)=>{
//             if(err){
//                 res.status(401);
//                 throw new Error("User is not authorized");
//             }
//             console.log(decoded);
//         });
//     }
// });


// module.exports=ValidateToken;



const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const ValidateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user; // Add decoded user info to the request object
            next();
        });
    } else {
        res.status(401);
        throw new Error("Token not found");
    }
});

module.exports = ValidateToken;
 