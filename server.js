// Imports the needed dependencies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd(); 
const PORT = process.env.PORT || 3001;

// This creates an Express App (Middleware)
const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// This starts the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
