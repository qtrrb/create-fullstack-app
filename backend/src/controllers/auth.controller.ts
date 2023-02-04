import axios from "axios";
import { Request, Response, NextFunction, Router } from "express";
import { getToken, generateAuthUrl } from "../utils/auth.util";
import { User } from "../models/user.model";
import { generateToken } from "../utils/token.util";
import { findAndUpdateOrCreate } from "../services/auth.service";

const scope = "user";
const frontend_url = "http://127.0.0.1:3000";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const state = Math.random().toString(36).substring(7);

  res.cookie("state", state, {
    maxAge: 1000 * 60 * 5,
    signed: true,
    path: "/",
  });

  const authUrl = generateAuthUrl(scope, state);
  res.redirect(authUrl);
});

router.get(
  "/callback",
  async (req: Request, res: Response, next: NextFunction) => {
    const code = req.query.code as string;
    const state = req.query.state as string;
    if (state === req.signedCookies.state) {
      try {
        const token = await getToken(code);
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const userResponse = await axios.get("https://api.github.com/user", {
          headers,
        });

        const user: User = {
          id: userResponse.data.id,
          username: userResponse.data.login,
          image: userResponse.data.avatar_url,
        };

        const user_db: User = await findAndUpdateOrCreate(user);
        const access_token = generateToken(user_db);

        res.cookie("access_token", access_token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
          domain: "127.0.0.1",
          path: "/",
        });
      } catch (error) {
        next(error);
      }
    }
    //TODO: Add Error for invalid state

    res.redirect(frontend_url);
  }
);

router.get("/logout", (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  if (token) {
    try {
      res.clearCookie("access_token");
      res.status(200).json({ responseStatus: "ok" });
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

export default router;
