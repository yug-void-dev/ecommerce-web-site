import JsonWebToken from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.log(token)  
    res.status(401).json({ message: "Access denied! Please login again" });
    return;
  }
  try {
    const resp = JsonWebToken.verify(token, process.env.SecretKey);
    console.log(resp);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid user!" });
  }
};

export default authMiddleware;
