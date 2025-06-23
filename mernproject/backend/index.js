// make the express install for the data 

const express = require('express')
const app= express();
const port= 5000;
const mongoDB = require("./db");
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())//middleware
// we will use app.use to call and get the data with the help of routes
app.use('/api',require("./Routes/CreateUser"));//help in end point hitting and sending the routes in db
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log(`example app listing on port ${port}`);
})