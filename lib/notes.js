const fs = require('fs');
const path = require('path');


function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
};

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    };
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

function filterById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

function deleteNote(id, notesArray) {
   const result = notesArray.filter(note => note.id !== id);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: result}, null, 2), err => {
            if (err) {
                console.log(err);
                return;
            }
        });
        return result;
};

module.exports = {createNewNote, validateNote, filterById, deleteNote};