const fs = require("fs");
const path = require("path");
const notesArray =  require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

function getNotes() {
  let results = notesArray;
  return results;
}

function noteById(id) {
  const results = notesArray.filter((note) => note.id === id)[0];
  return results;
}

function createNewNote(body) {
  let Id = { id: uuidv4() };
  let Note = { ...Id, ...body };
  notesArray.push(Note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray)
  );
  return Note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}


module.exports = { getNotes, noteById, createNewNote, validateNote };