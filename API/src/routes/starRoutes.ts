import { Router } from "express";
import * as starController from "../controllers/starController";

const starRouter = Router();

starRouter.route("/getStars").get(starController.getStars);
starRouter.route("/getStar/:id").get(starController.getStar);
starRouter.route("/addStar").post(starController.addStar);
starRouter.route("/updateStar").post(starController.updateStar);
starRouter.route("/deleteStar/:id").delete(starController.deleteStar);

export default starRouter;
