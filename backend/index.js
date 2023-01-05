const express= require("express")
const {userController}=require("./routes/user.route")
const app=express();
const PORT=8080;
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userController)

app.listen(PORT,()=>{
    console.log("listing")
})
