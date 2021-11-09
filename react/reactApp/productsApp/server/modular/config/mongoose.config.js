const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("established connection"))
.catch(e => console.log(e));