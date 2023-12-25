const express = require("express")
const app = express()

//routes
app.get('/',(req,res) =>{
    res.send("Hello Home Page")
})

app.get('/blog',(req,res)=>{
    res.send("Hello Blog")
})


app.listen(5000,()=>{
    console.log("App is ruunning on port 3000")
})
