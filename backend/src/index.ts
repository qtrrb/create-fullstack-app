import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/routes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || "8080";

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "API is running on /api" });
});

app.listen(PORT, () => {
  console.log(`⚡ Server is running on port ${PORT}.`);
});
