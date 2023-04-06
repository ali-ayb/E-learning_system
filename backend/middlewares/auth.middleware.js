const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Unauthenticated" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    next();
  } catch (e) {
    return res.status(500).json({ message: "Server Error" });
  }
};
