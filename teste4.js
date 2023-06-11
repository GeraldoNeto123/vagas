var data = require("./fakeData");

module.exports = function (req, res) {
  const { id } = req.query;
  const { name, job } = req.body;

  let user = data.find((dataUser) => dataUser.id === id);

  if (!user) {
    return res.send(404, { error: "User not found" });
  }

  user.name = name || user.name;
  user.job = job || user.job;

  res.send(user);
};
