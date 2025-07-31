import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { any } from "zod";

dotenv.config();
interface AuthRequest extends Request {
  userId?: string;
}

const secret: Secret = process.env.JWT_SECRET as Secret;
let userMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(403).json({
        message: "Unable to find authentication token",
      });
    }

    const decoded: JwtPayload = jwt.verify(
      token as string,
      secret
    ) as JwtPayload;
    req.userId = decoded.token;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export{
    userMiddleware, AuthRequest
}