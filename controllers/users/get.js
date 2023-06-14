const usersData = require("../../usersData");

const get = (req, res) => {
  if (req.query.location) {
    const newData = usersData.filter(
      (item) => item.location === req.query.location
    );
    res.send(newData);
  } else {
    res.send(usersData);
  }
};

module.exports = get;
