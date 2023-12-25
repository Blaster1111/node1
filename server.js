const express = require("express")
const app = express()

//routes
app.get('/',(req,res) =>{
    res.send("Hello node api")
})

app.listen(5000,()=>{
    console.log("App is ruunning on port 3000")
})
