const noteModel = require('../models/NotesModel');
const express = require('express');
const router = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    const {note_title, note_description, priority,content} = req.body;
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // console.log("Begin saving")
    try{
        //TODO - Write your code here to save the note
        const newNote = new noteModel({
            note_title,note_description,priority,content,
            date_added: new Date(),
            date_updated: new Date()
        })

        await newNote.save();
        res.send({
            status: true,
            message: "note write successfully"
        });
    }catch(e){
        console.error(e);
        res.status(500).json({error: 'Failed to add note'})
    }

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    const notes = await noteModel.find()
    //TODO - Write your code here to returns all note
    try{
        res.send(notes);
    }catch(err){
        console.error("Error finding note: " + err);
        console.log("Error: " + err);
        res.send({
            status: false,
            err
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    const note_id = req.params.noteId
    try{
        const note = await noteModel.findById(note_id);
        if(!note){return res.json({
            status: false, 
            message: "Note not found"
        })}
        res.json({status: true, note});
    }catch(err){
        console.error("Error finding note: " + err);
        res.json({
            status: false,
            message: "Note finding error",
            error: err.message
        });
    }
    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    const note_id = req.params.noteId;
    const note_update = req.body;
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        const note_put = await noteModel.findByIdAndUpdate(
            note_id,
            {
                $set: note_update,
                date_updated: new Date()
            },
            {new: true, runValidators: true}
        );

        if(!note_put){
            return res.json({
                status: false,
                message: "Note not found"
            })
        }
        res.json({
            status: true,
            message: `Note ID ${note_id} has been updated!`,
            note_put
        });
    }catch(err){
        console.error("Note update error:",err);
        res.json({
            status: false,
            message: "Note update fail",
            error: err.message
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    const note_id = req.params.noteId;
    // Validate request
    if(!note_id) {
        return res.status(400).send({
            message: "Note id can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        note_delete = await noteModel.findByIdAndDelete(note_id);
        if(!note_delete){
            return res.json({status: false, message: "Note not found"});
        }

        res.json({
            status: true,
            message: `Note ID ${note_id} has been deleted`,
            note_delete
        });
    }catch(err){
        console.error("Note delete error:",err);
        res.json({
            status: false,
            message: "Note delete fail",
            error: err.message
        });
    }
});

module.exports = router;