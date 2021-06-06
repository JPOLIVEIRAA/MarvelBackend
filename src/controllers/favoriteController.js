const express = require('express');
const Favorite = require('../models/Favorite');

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const favorito = await Favorite.find();

        return res.status(200).send({favorito});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to get favorites'});
    }
});

router.post('/', async (req, res) =>{
    try {
        const favorito = await Favorite.create(req.body);

        return res.status(200).send({favorito});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to favorite'});
    }
});

router.delete('/', async (req, res) =>{
    try {
        const {id} = req.body;
        console.log(req.body)
        const favorito = await Favorite.findOneAndRemove(req.body.id);

        return res.status(200).send({favorite: favorito, message: 'Favorite removed successfully'});
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Unable to delete favorite'});
    }
});

module.exports = app => app.use('/favorites', router);
