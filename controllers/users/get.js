const usersData = require("../../usersData");

const get = (req, res) => {
  if (req.query.location) {
    const location = req.query.location.toUpperCase();
    const newData = usersData.filter((item) => {
      const itemLocation = item.location.toUpperCase();
      return itemLocation.includes(location);
    });
    res.send(newData);
  } else {
    res.send(usersData);
  }
};

module.exports = get;
