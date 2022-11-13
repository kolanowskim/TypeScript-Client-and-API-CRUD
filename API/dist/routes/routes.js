"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiController = __importStar(require("../controllers/apiController"));
var router = (0, express_1.Router)();
router.route("/getStars").get(apiController.getStars);
router.route("/addStar").post(apiController.addStar);
router.route("/deleteStar/:id").delete(apiController.deleteStar);
router.route("/getStar/:id").get(apiController.getStar);
router.route("/getConstellations").get(apiController.getConstellations);
router.route("/addConstellation").post(apiController.addConstellation);
router.route("/addStarConstellation").post(apiController.addStarConstellation);
router
    .route("/GetAllConstellationsForStar/:id")
    .get(apiController.GetAllConstellationsForStar);
exports.default = router;
//# sourceMappingURL=routes.js.map