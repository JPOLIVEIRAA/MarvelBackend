const express = require('express');
const FavoriteCharacter = require('../models/favoriteCharacters');

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const favoriteCharacter = await FavoriteCharacter.find();

        return res.status(200).send({favoriteCharacter});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to get favoriteCharacters'});
    }
});

router.post('/', async (req, res) =>{
    try {
        const favoriteCharacter = await FavoriteCharacter.create(req.body);

        return res.status(200).send({favoriteCharacter});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to favoriteCharacter'});
    }
});

router.delete('/', async (req, res) =>{
    try {
        const favoriteCharacter = await FavoriteCharacter.findOneAndRemove(req.body.id);

        return res.status(200).send({favoriteCharacter: favoriteCharacter, message: 'favoriteCharacter removed successfully'});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to delete favoriteCharacter'});
    }
});

module.exports = app => app.use('/favoriteCharacters', router);