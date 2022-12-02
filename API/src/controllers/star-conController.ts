import { Request, RequestHandler, Response } from "express";
import * as MySqlService from "../services/mysqlStar-Con";

export const GetAllConstellationsForStar: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const Constellations = await MySqlService.getAllConstellationsForStar(
      req.params.id
    );
    res.status(200).json({
      Constellations,
    });
  } catch (error) {
    console.error(
      "[star-conController][GetAllConstellationsForStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching AllConstellationsForStar",
    });
  }
};

export const GetAllStarsForConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const Stars = await MySqlService.GetAllStarsForConstellation(req.params.id);
    res.status(200).json({
      Stars,
    });
  } catch (error) {
    console.error(
      "[star-conController][GetAllStarsForConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching AllStarsForConstellation",
    });
  }
};

export const addStarConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.addStarConstellation(req.body);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[star-conController][addStarConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding addStarConstellation",
    });
  }
};

export const deleteStarConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.deleteStarConstellation(req.params.id);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[star-conController][deleteStarConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting StarConstellation",
    });
  }
};
