import { Router } from "express";
import * as starConController from "../controllers/star-conController";

const starConRouter = Router();

starConRouter
  .route("/GetAllConstellationsForStar/:id")
  .get(starConController.GetAllConstellationsForStar);

starConRouter
  .route("/GetAllStarsForConstellation/:id")
  .get(starConController.GetAllStarsForConstellation);
starConRouter
  .route("/addStarConstellation")
  .post(starConController.addStarConstellation);
starConRouter
  .route("/deleteStarConstellation/:id")
  .delete(starConController.deleteStarConstellation);

export default starConRouter;
