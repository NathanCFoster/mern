const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./modular/controllers/products.controller");

require('./modular/config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

require('./modular/routes/products.routes') (app);
const server = app.listen(8000, () => console.log("connected to port 8000"));

const socketio = require('socket.io'); 
const Product = require("./modular/models/product");
io = socketio(server, {cors: true});

io.on("connection", socket => {
    socket.on("allProds", async () => {
        let res = [];
        await(Product.find().then(e => res = [...e]).catch(e => res = e));
        io.emit("prodsResp", res);
    });
});