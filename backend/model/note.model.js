const mongoose=require("mongoose")

const noteSchema= new mongoose.Schema({
    Heading:{type:String, required:true},
    Note:{type:String, required:true},
    Tag:{type:Number, required:true}
})

const NoteModel= mongoose.model("notemaking",noteSchema)

module.exports={NoteModel}