const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    // set id based on what the next index of the notes array will be
    req.notes.id = notes.length.toString();

    const note = createNewNote()
});

module.exports = router;