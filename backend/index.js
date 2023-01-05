const express= require("express")
const {userController}=require("./routes/user.route")
const {connection} =require("./config/db")
const {notesController}=require("./routes/note.route")
const app=express();
const PORT=8080;
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userController)

app.listen(PORT,async()=>{

    try{
        await connection;
        console.log(" connected")
    }
    catch(err){
        console.log("error")
        console.log(err)
    }
    console.log("listing"+PORT)
})
