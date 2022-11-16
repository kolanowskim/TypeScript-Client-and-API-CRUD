import { Request, RequestHandler, Response } from "express";
import * as MySqlService from "../services/mysql.services";

//Stars

export const getStars: RequestHandler = async (req: Request, res: Response) => {
  try {
    const stars = await MySqlService.getStars();
    res.status(200).json({
      stars,
    });
  } catch (error) {
    console.error(
      "[apiController][getStars][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching Stars",
    });
  }
};

export const addStar: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await MySqlService.addStar(req.body);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[apiController][addStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding new Star",
    });
  }
};

export const getStar: RequestHandler = async (req: Request, res: Response) => {
  try {
    const star = await MySqlService.getStar(req.params.id);
    res.status(200).json({
      star,
    });
  } catch (error) {
    console.error(
      "[apiController][getStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching Star",
    });
  }
};

export const updateStar: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.updateStar(req.body);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[apiController][updateStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when updating star",
    });
  }
};

export const deleteStar: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await MySqlService.deleteStar(req.params.id);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.error(
      "[apiController][deleteStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting star",
    });
  }
};

//Constellations

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
      "[apiController][getConstellations][Error] ",
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
      "[apiController][getConstellation][Error] ",
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
      "[apiController][addConstellation][Error] ",
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
      "[apiController][updateConstellation][Error] ",
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
      "[apiController][deleteConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting Constellation",
    });
  }
};

//starsconstellations

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
      "[apiController][GetAllConstellationsForStar][Error] ",
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
      "[apiController][GetAllStarsForConstellation][Error] ",
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
      "[apiController][addStarConstellation][Error] ",
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
      "[apiController][deleteStarConstellation][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting StarConstellation",
    });
  }
};
