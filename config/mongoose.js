//Require the library
const mongoose = require('mongoose');

//Connect to the databse
mongoose.connect('mongodb://localhost/contacts_list_db');

//accquire the connection (to check if it is successful)
const db = mongoose.connection;

//Error
db.on('error', console.error.bind(console, 'error connecting to db'));

//Up and running then print the message
db.once('open', function () {
    console.log('successfully connected to the database');
})