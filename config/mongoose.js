const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omkarbhavare2406:Issue24@cluster0.2s4zb4v.mongodb.net/?retryWrites=true&w=majority');

//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the databasef");
});