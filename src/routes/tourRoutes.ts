import { Router } from "express";
import { getTours } from "../controllers/tourController";

const router: Router = Router();

router.route("/").get(getTours);

export default router;
