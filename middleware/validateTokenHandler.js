const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && (authHeader.startsWith("Bearer"))){
        token = authHeader.split(" ")[1];
        jsonwebtoken.verify(token,process.env.SECRET_ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("user is not authorized");
            }
            console.log('decoded',decoded);
            
            req.user = decoded;
            next();
            
        });
        if(!token){
            res.status(401);
            res.send("user is not authorized or token is missing")
        }
    }
})
module.exports = validateToken;