const { Router } = require("express")
const { NoteModel } = require("../model/note.model")

const notesController = Router();

notesController.get("/", async (req, res) => {
    const notes = await NoteModel.find({ userId: req.body.userId })
    res.send(notes)
})

notesController.post("/create", async (req, res) => {
    const { Heading, Note, Tag, userId } = req.body;
    const note = new NoteModel({
        Heading,
        Note,
        Tag,
        userId
    })
    try {
        await note.save()
        res.send("notes")
    }
    catch (err) {
        console.log(err)
        res.send("something went worng")
    }
})



notesController.delete("/delete/:noteId", async (req, res) => {
   const {noteId}=req.params
    const deleteNote = await NoteModel.findOneAndDelete({_id:noteId, userId: req.body.userId })
    if(deleteNote){
        res.send("deleted")
    }
    else{
        res.send("not deleted")
    }
})


notesController.patch("/edit/:noteId", async (req, res) => {
    const {noteId}=req.params
     const UpdateNote = await NoteModel.findOneAndUpdate({_id:noteId, userId: req.body.userId },{...req.body})
     if(UpdateNote){
         res.send("UpdateNote")
     }
     else{
         res.send("not UpdateNote")
     }
 })
module.exports = {
    notesController
}