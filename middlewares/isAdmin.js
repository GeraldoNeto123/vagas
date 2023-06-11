var data = require("../fakeData");

module.exports = function (req, res, next) {
  const userIdHeader = req.headers["x-user-id"];

  if (!userIdHeader) {
    return res.status(400).json({ error: "Header X-User-Id not provided" });
  }

  const userExists = data.find(
    (dataUser) => dataUser.id === userIdHeader
  );

  if (userExists && userExists.isAdmin) {
    next();
  } else {
    return res.status(403).json({ error: "Permissão negada." });
  }
};
