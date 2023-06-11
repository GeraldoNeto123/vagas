var data = require("./fakeData");
const { v4: uuidv4 } = require('uuid');

module.exports = function (req, res) {
  const { name, job, isAdmin } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required" });
  if (!job) return res.status(400).json({ error: "Job is required" });

  const newUser = {
    id: uuidv4(),
    name,
    job,
    isAdmin: Boolean(isAdmin),
    amountOfReadings: 0,
  };

  data.push(newUser);

  res.send(newUser);
};
