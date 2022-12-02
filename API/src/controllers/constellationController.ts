import { Request, RequestHandler, Response } from "express";
import * as MySqlService from "../services/mysqlConstellations";

export const getConstellations: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const Constellations = await MySqlService.getConstellations();
    res.status(200).json({
      Constellations,
    });
  } catch (error) {
    console.error(
      "[constellationController][getConstellations][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching Constellations",
    });
  }
};

export const getConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const constellation = await MySqlService.getConstellation(req.params.id);
    res.status(200).json({
      constellation,
    });
  } catch (error) {
    console.error(
      "[constellationController][getConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching Constellation",
    });
  }
};

export const addConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.addConstellation(req.body);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[constellationController][addConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding Constellation",
    });
  }
};

export const updateConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.updateConstellation(req.body);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[constellationController][updateConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when updating Constellation",
    });
  }
};

export const deleteConstellation: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.deleteConstellation(req.params.id);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[constellationController][deleteConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting Constellation",
    });
  }
};
