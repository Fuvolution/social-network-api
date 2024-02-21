require('dotenv').config();

const {connect, connection } = require('mongoose');

const connectionString = process.env.connectionString; 

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, `MongoDB connection error`);
db.once('open', () => {
    console.log('Connected to MongoDB database');
})

module.exports = connection; 