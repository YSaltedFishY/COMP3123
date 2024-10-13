const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const NoteSchema = new mongoose.Schema({
    note_title:{
        type: String
    },
    note_description:{
        type: String
    },
    content:{
        type: String
    },
    priority:{
        type: String,
        enum: ['HIGH','MEDIUM','LOW'],
        required: true
    },
    date_added: Date,
    date_updated: Date
})

const Note = mongoose.model("notes", NoteSchema)
module.exports = Note