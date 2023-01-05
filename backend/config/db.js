const mongoose =require("mongoose")
require("dotenv").config

const connection = mongoose.connect(`mongodb+srv://vivekrj:vivek@cluster0.a3uhonf.mongodb.net/testone?retryWrites=true&w=majority`)

module.exports={connection}