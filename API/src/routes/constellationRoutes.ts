import { Router } from "express";
import * as constellationController from "../controllers/constellationController";

const constellationRouter = Router();

constellationRouter
  .route("/getConstellations")
  .get(constellationController.getConstellations);
constellationRouter
  .route("/getConstellation/:id")
  .get(constellationController.getConstellation);
constellationRouter
  .route("/addConstellation")
  .post(constellationController.addConstellation);
constellationRouter
  .route("/updateConstellation")
  .post(constellationController.updateConstellation);
constellationRouter
  .route("/deleteConstellation/:id")
  .delete(constellationController.deleteConstellation);

export default constellationRouter;
