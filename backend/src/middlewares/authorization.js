import jwt from "jsonwebtoken";
import jwtConfig from "../jwtConfig.js";

export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;

  if (auth) {
    const token = auth.split(" ");

    try {
      const payload = jwt.verify(token[1], jwtConfig.secret);
      req.newUser = payload;
      next();
    } catch (error) {
      res.status(401).send("Unauthorized.");
    }
  } else {
    res.status(401).send("Unauthorized.");
  }
}
