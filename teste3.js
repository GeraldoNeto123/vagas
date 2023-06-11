var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const usersIndex = data.findIndex((dataUser) => dataUser.name === name);
  if (usersIndex !== -1) {
    data.splice(usersIndex, 1);
    return res.sendStatus(204);
  }

  return res.status(404).json({ error: "User not found" });
};
