const mongoose = require('../database');

const FavoriteCharacterSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String      
    },
    thumbnail:{
        type: String,
        required: true,
    }
    
});


const FavoriteCharacter = mongoose.model('FavoriteCharacter', FavoriteCharacterSchema);

module.exports = FavoriteCharacter;