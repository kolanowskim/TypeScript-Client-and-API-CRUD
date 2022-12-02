import { Request, RequestHandler, Response } from "express";
import * as MySqlService from "../services/mysqlStars";

export const getStars: RequestHandler = async (req: Request, res: Response) => {
  try {
    const stars = await MySqlService.getStars();
    res.status(200).json({
      stars,
    });
  } catch (error) {
    console.error(
      "[starController][getStars][Error] ",
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
      "[starController][addStar][Error] ",
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
      "[starController][getStar][Error] ",
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
      "[starController][updateStar][Error] ",
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
      "[starController][deleteStar][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when deleting star",
    });
  }
};
