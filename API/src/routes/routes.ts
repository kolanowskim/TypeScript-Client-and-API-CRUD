import { Router } from "express";
import {
  getStars,
  getStar,
  addStar,
  getConstellations,
  addConstellation,
  addStarConstellation,
  GetAllConstellationsForStar,
} from "../controllers/apiController";

const router = Router();

router.route("/getStars").get(getStars);
router.route("/addStar").post(addStar);
router.route("/getStar/:id").get(getStar);
router.route("/getConstellations").get(getConstellations);
router.route("/addConstellation").post(addConstellation);
router.route("/addStarConstellation").post(addStarConstellation);
router
  .route("/GetAllConstellationsForStar/:id")
  .get(GetAllConstellationsForStar);

export default router;
