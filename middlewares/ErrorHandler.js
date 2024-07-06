const {constants}=require("../constant");


const errHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title :"Validation failed",message: err.message, stackTrace : err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title :"not found",message: err.message, stackTrace : err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title :"unautorized access",message: err.message, stackTrace : err.stack});
            break;
        case constants.FORBIDEN:
            res.json({title :"Frobiden",message: err.message, stackTrace : err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title :"server error",message: err.message, stackTrace : err.stack});
            break;
        default:
            console.log("No error ! All good");
            break;
    }
    
}

module.exports=errHandler;