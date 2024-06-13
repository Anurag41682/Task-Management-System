const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "You are not authorized" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401);
  }
};

module.exports = authorize;
