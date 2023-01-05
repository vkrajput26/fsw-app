const {Router} = require("express")
const {NoteModel}=require("../model/note.model")

const notesController = Router();

notesController.get("/",(req,res)=>{
    res.send("notes")
})

module.exports={
    notesController
}