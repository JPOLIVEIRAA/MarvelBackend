const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promisse = global.Promisse;

module.exports = mongoose;

