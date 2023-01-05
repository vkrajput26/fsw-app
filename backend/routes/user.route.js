const {Router} = require("express")

const userController =Router()

userController.post("/signup", (req,res)=>{
    res.send("signup")
})

userController.post("/login", (req,res)=>{
    res.send("login")
})

module.exports={userController}