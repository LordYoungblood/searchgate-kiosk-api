const jwt = require("jsonwebtoken");

// ----- Auth middleware to verify token and add user to req object -----------------//
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // const token = req.cookies.auth;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;
