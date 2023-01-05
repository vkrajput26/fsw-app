const {Router} = require("express")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config()


const {Usermodel}=require("../model/user.model")
const userController =Router()

userController.post("/signup", (req,res)=>{
    const {email,password,age}=req.body;
    bcrypt.hash(password,5,async function(err,hash){
        if(err){
            res.send("something went wrong")
        }
        const user=new Usermodel({
            email,
            password:hash,
            age
        })
        try{

            await user.save()
            res.send("sign up successfull")
        }
        catch(err){
            res.send("something went wrong")
        }
    });
    
   
})

userController.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    const user = await Usermodel.findOne({email})
    const hash = user.password
    bcrypt.compare(password,hash,function(err,result){
        if(err){
            res.send("something went worng")
        }
        if(result){
            const token= jwt.sign({userId:user._id},"ii")
            res.send(token)
        }
        else{
            res.send("invalid credentials")
        }
    });
})

module.exports={userController}