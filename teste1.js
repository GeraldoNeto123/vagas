var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  const user = data.find((dataUser) => dataUser.name === name);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.amountOfReadings = user.amountOfReadings + 1;

  return res.send(user);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
