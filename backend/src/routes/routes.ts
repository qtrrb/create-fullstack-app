import { Router } from "express";
import authController from "../controllers/auth.controller";
import profileController from "../controllers/profile.controller";

const api = Router().use(profileController);
const auth = Router().use(authController);
export default Router().use("/api", api).use("/auth", auth);
