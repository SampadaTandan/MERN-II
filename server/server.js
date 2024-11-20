require("dotenv").config();//to use env
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json()); //to read json

app.use("/api/auth", authRoute); //jumps to middleware
app.use("/api/form", contactRoute); 

app.use(errorMiddleware);

app.get("/", (req, res)=>{
    res.status(200).send("Welcome")
});


app.post("/register", (req, res)=>{
    res.status(200).send("Welcome to registration page");
});



const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running : ${PORT}`)
    });
})