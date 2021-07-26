const router = require('express').Router();
const { createNewNote, validateNote, filterById, deleteNote} = require('../../lib/notes');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const result = filterById(req.params.id, notes);
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the notes array will be
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        req.status(400).send("The note is not properly formatted.")
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if(result) {
        res.json(notes);
    } else {
        res.sendStatus(404);
    }
});


module.exports = router;