"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiController_1 = require("../controllers/apiController");
var router = (0, express_1.Router)();
router.route("/getStars").get(apiController_1.getStars);
router.route("/addStar").post(apiController_1.addStar);
router.route("/getStar/:id").get(apiController_1.getStar);
router.route("/getConstellations").get(apiController_1.getConstellations);
router.route("/addConstellation").post(apiController_1.addConstellation);
router.route("/addStarConstellation").post(apiController_1.addStarConstellation);
router
    .route("/GetAllConstellationsForStar/:id")
    .get(apiController_1.GetAllConstellationsForStar);
exports.default = router;
//# sourceMappingURL=routes.js.map