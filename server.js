const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/db.json');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// tell app to look for js and css in 'public' directory
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// API ROUTES
app.use('/api', apiRoutes);

// HTML ROUTES
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});