const express = require("express");
const sum = require("./sum");
const app = express()


app.get("/home",(req,res)=>{
    res.json({msg:"somthings"})
})

app.get("/getSum/:a/:b",(req,res)=>{
    const {a,b} = req.params;
    console.log(a,b)
    let result = sum(parseInt(a),parseInt(b)) // bevause it come from params as a string form to conver this into integer
    res.json({sum:result})
})

const port = 3000
app.listen(port,()=>{
    console.log("server is started on this port 3000")
})

