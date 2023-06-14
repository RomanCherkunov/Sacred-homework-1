const express = require("express");

const controllers = require("./controllers");

const app = express();
app.use(express.json());

Object.keys(controllers).forEach((el) => {
  const item = controllers[el];

  if (typeof item === "function") {
    const router = item(el);
    if (router) {
      app.use(router);
    }
  }
});

app.listen(3000);
