import JsonWebToken from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header.authorization?.split(" ")[1];
  if (!token) {
    token.status(401).json({ message: "Access denied! Please login again" });
    return;
  }

  try {
    const res = JsonWebToken.verify(token, process.env.SecretKey);
    console.log(res);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid user!" });
  }
};

export default authMiddleware;
