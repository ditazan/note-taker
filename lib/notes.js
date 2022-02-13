const fs = require("fs");
const path = require("path");
const notesArray = require("../db/db.json");

function getNotes(){
    let results = notesArray;
    return results;
}

function noteById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
  }