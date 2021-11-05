const controller = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes/random', controller.findRandom);
    app.get('/api/jokes/:_id', controller.findOneJoke);
    app.get('/api/jokes', controller.findAllJokes);
    app.post('/api/jokes/new', controller.createJoke);
    app.put('/api/jokes/update/:_id', controller.updateJoke);
    app.delete('/api/jokes/delete/:_id', controller.deleteJoke);
}