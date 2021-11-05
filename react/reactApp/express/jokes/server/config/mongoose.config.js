const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('established connection'))
.catch(e => console.log(e));