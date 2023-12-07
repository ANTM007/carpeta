const express = require("express")
const cors = require("cors")
const app= express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(require('./routes/index'))

app.listen(3000,(err)=>{
    if(err) console.log("un error manooo")
    console.log("server coriendo papu")

} )

app.get('/',(req,res)=>{

    res.send("<H1>HELLO...</H1>")
})