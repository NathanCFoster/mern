const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(e => res.json({ jokes: e}))
        .catch(e => res.json({error: e}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id})
        .then(e => res.json({joke: e}))
        .catch(e => res.json({error: e}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(e => {
            console.log(e)
            res.json({ joke: e})
        })
        .catch(e => res.json({error: e}))
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true})
        .then(e => res.json({joke: e}))
        .catch(e => res.json({error: e}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(e => res.json(e))
        .catch(e => res.json({error: e}))
}

module.exports.findRandom = (req, res) => {
    Joke.find()
        .then(e => res.json(e[Math.floor(Math.random() * e.length)]))
        .catch(e => res.json({err: e}));
}