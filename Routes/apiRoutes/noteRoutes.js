const router = require("express").Router();

const {
  getNotes,
  noteById,
  createNewNote,
  validateNote,
} = require("../../lib/notes");

const notesArray = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = getNotes();
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let results = noteById(req.params.id);
  if (results) {
    res.json(notesArray);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send("Note is missing information !");
  } else {
    const note = createNewNote(req.body);
    res.json(note);
  }
});

module.exports = router;