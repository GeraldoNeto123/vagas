var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const user = data.find((dataUser) => dataUser.name === name);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.send(`Usuário ${user.name} foi lido ${user.amountOfReadings} vezes.`);
};
