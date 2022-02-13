const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;




// instantiating the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
}); 

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`api server is now on port ${PORT}!`);
  });