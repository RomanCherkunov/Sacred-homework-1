const express = require("express");

const controllers = require("./controllers");

const app = express();
app.use(express.json());

controllers(app);

app.listen(3000);
