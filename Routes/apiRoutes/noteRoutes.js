const router = require('express').Router();
const { getNotes, noteById, createNewNote, validateNote } =  require("../../lib/notes");