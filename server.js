const express = require("express")
const mangoose = require("mongoose")
const app = express()

//routes
app.get('/',(req,res) =>{
    res.send("Hello Home Page")
})

app.get('/blog',(req,res)=>{
    res.send("Hello Blog")
})

app.post('/product',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
    
})


mangoose.
connect('mongodb+srv://rudra:rudra1111@cluster0.saeci7g.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(5000,()=>{
        console.log("App is ruunning on port 3000")
    })
    
}).catch(()=>{
    console.log(error)
})