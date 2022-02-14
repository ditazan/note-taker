const express = require('express');
const PORT = process.env.PORT || 3001;

// routes for api and html
const apiRoutes = require('./Routes/apiRoutes'); 
const htmlRoutes = require('./Routes/htmlRoutes'); 



// instantiating the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// error response just in case address not found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`api server is now on port ${PORT}!`);
  });


