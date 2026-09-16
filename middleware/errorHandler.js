const {Constants} = require("../constants")
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
   switch(statusCode){
    case Constants.VALIDATION_ERROR:
         res.json({title : "Validation failed",message : err.message,stackTrace : err.stack});
    break;      
    case Constants.NOT_FOUND:
         res.json({title: "Not found",message : err.message,stackTrace : err.stack});
    break;
    case Constants.UNAUTHORIZED:
         res.json({title: "Un authorized",message : err.message,stackTrace : err.stack});
    break;
    case Constants.FORBIDDEN:
         res.json({title:"Forbidden",message : err.message,stackTrace : err.stack});
    break;
    case Constants.SERVER_ERROR:
         res.json({title:"Server Error",message : err.message,stackTrace : err.stack});
    break;
    default : 
    console.log('No Error !! All good!!');
    
   }
};
module.exports = errorHandler;