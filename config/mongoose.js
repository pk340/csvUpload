const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://pk340779:SUU26O5CnkkbH9V6@cluster0.wuhfhtl.mongodb.net/csvUpload?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;