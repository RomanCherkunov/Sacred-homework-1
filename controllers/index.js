const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  const files = fs
    .readdirSync(__dirname)
    .filter((path) => path.toUpperCase() !== "INDEX.JS");

  for (const file of files) {
    const loadFile = require(`./${file}`);

    if (typeof loadFile === "function") {
      const ext = path.extname(file);
      const controllerName = file.replace(ext, "");

      console.log("current item:  ", controllerName);

      const item = loadFile(controllerName);

      app.use(item);
    }
  }
};
