const express  = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const routes = require("./server/routes/jokes.routes");
routes(app);

app.listen(8000, () => console.log("server is running on port 8000"));