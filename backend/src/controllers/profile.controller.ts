import { Request, Response, Router } from "express";
import { validateToken } from "../utils/token.util";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  if (token) {
    try {
      const userData = validateToken(token);
      res.json(userData);
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

export default router;
