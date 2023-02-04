import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";
import "dotenv/config";

export function generateToken(user: User): string {
  return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "7d" });
}

export function validateToken(token: string): string | JwtPayload {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
