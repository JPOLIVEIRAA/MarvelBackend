const mongoose = require('../database');

const FavoriteSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    issueNumber: {
        type: Number,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    price: {
        type: Array,
        required: true,
    },
    
});


const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;