import { Router } from "express";
import * as apiController from "../controllers/apiController";

const router = Router();

//Stars
router.route("/getStars").get(apiController.getStars);
router.route("/getStar/:id").get(apiController.getStar);
router.route("/addStar").post(apiController.addStar);
router.route("/updateStar").post(apiController.updateStar);
router.route("/deleteStar/:id").delete(apiController.deleteStar);

//Constellations
router.route("/getConstellations").get(apiController.getConstellations);
router.route("/getConstellation/:id").get(apiController.getConstellation);
router.route("/addConstellation").post(apiController.addConstellation);
router.route("/updateConstellation").post(apiController.updateConstellation);
router
  .route("/deleteConstellation/:id")
  .delete(apiController.deleteConstellation);

//StarsConstellations
router
  .route("/GetAllConstellationsForStar/:id")
  .get(apiController.GetAllConstellationsForStar);

router
  .route("/GetAllStarsForConstellation/:id")
  .get(apiController.GetAllStarsForConstellation);
router.route("/addStarConstellation").post(apiController.addStarConstellation);
router
  .route("/deleteStarConstellation/:id")
  .delete(apiController.deleteStarConstellation);

export default router;
