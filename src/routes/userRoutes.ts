import { Router } from "express";
import { getUser } from "../controllers/userController";

const router: Router = Router();

router.route("/").get(getUser);

export default router;
