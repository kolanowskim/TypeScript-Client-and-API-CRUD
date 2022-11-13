import { Router } from "express";
import * as apiController from "../controllers/apiController";

const router = Router();

//Stars
router.route("/getStars").get(apiController.getStars);
router.route("/addStar").post(apiController.addStar);
router.route("/deleteStar/:id").delete(apiController.deleteStar);
router.route("/getStar/:id").get(apiController.getStar);
router.route("/updateStar").post(apiController.updateStar);

//Constellations
router.route("/getConstellations").get(apiController.getConstellations);
router.route("/addConstellation").post(apiController.addConstellation);

//StarsConstellations
router.route("/addStarConstellation").post(apiController.addStarConstellation);
router
  .route("/GetAllConstellationsForStar/:id")
  .get(apiController.GetAllConstellationsForStar);

export default router;
