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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStarConstellation = exports.GetAllConstellationsForStar = exports.addConstellation = exports.getConstellations = exports.getStar = exports.addStar = exports.getStars = void 0;
var MySqlService = __importStar(require("../services/mysql.services"));
//!!!!!DOPOPRAWY
//Stars
var getStars = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var stars, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.getStars()];
            case 1:
                stars = _a.sent();
                res.status(200).json({
                    stars: stars,
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_1 === "object" ? JSON.stringify(error_1) : error_1);
                res.status(500).json({
                    message: "There was an error when fetching teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStars = getStars;
var addStar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.addStar(req.body)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    result: result,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("[teams.controller][addTeam][Error] ", typeof error_2 === "object" ? JSON.stringify(error_2) : error_2);
                res.status(500).json({
                    message: "There was an error when adding new team",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addStar = addStar;
var getStar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var star, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.getStar(req.params.id)];
            case 1:
                star = _a.sent();
                res.status(200).json({
                    star: star,
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_3 === "object" ? JSON.stringify(error_3) : error_3);
                res.status(500).json({
                    message: "There was an error when fetching teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStar = getStar;
//Constellations
var getConstellations = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Constellations, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.getConstellations()];
            case 1:
                Constellations = _a.sent();
                res.status(200).json({
                    Constellations: Constellations,
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_4 === "object" ? JSON.stringify(error_4) : error_4);
                res.status(500).json({
                    message: "There was an error when fetching teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getConstellations = getConstellations;
var addConstellation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.addConstellation(req.body)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    result: result,
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_5 === "object" ? JSON.stringify(error_5) : error_5);
                res.status(500).json({
                    message: "There was an error when adding teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addConstellation = addConstellation;
//starsconstellations
var GetAllConstellationsForStar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Constellations, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.getAllConstellationsForStar(req.params.id)];
            case 1:
                Constellations = _a.sent();
                res.status(200).json({
                    Constellations: Constellations,
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_6 === "object" ? JSON.stringify(error_6) : error_6);
                res.status(500).json({
                    message: "There was an error when fetching teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GetAllConstellationsForStar = GetAllConstellationsForStar;
var addStarConstellation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, MySqlService.addStarConstellation(req.body)];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    result: result,
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.error("[teams.controller][getTeams][Error] ", typeof error_7 === "object" ? JSON.stringify(error_7) : error_7);
                res.status(500).json({
                    message: "There was an error when adding teams",
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addStarConstellation = addStarConstellation;
//# sourceMappingURL=apiController.js.map