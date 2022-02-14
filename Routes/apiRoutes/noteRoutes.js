const router = require("express").Router();

const {
  getNotes,
  noteById,
  createNewNote,
  validateNote,
  deleteNote
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

//removes note by id
router.delete('/notes/:id', (req, res) => {
  let results = deleteNote(req.params.id);
  if (results) {
  res.json(results);
  } else {
    res.status(400).send('Something went wrong.');
  }
});  

module.exports = router;