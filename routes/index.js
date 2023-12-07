const route = require("express").Router()
//postman
route.get("/customer",(req,res)=>{
    res.json({
        id:1,
        name:"praticia",
        descripcion:"descripcion",
        age:32,
    });
});
module.exports = route