const mongoose = require("mongoose");

const JokeShema = new mongoose.Schema({
    setup: String,
    punchLine: String,
})

const Joke = mongoose.model("Joke", JokeShema);

module.exports = Joke;