const mongoose = require('mongoose');

const keys = require('./keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoose.uri, {
        useNewUrlParser: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('Database connected'));

module.exports = mongoose;