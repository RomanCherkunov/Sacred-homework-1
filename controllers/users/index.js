const { Router } = require("express");

const get = require("./get");

const post = require('./post');

module.exports = (name) => {
  const router = new Router();

  router.get(`/${name}`, get);

  router.post(`/${name}`, post);

  return router;
};
