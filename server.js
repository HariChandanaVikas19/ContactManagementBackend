const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/config");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectDb()
// app.get("/api/contacts",(req,res)=>{
//     // res.send("get all contacts");
//     res.status(200).json({message:"get all contacts"})
// })
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`); 
});