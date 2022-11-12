import { Request, RequestHandler, Response } from "express";
import * as MySqlService from "../services/mysql.services";

//!!!!!DOPOPRAWY
//Stars

export const getStars: RequestHandler = async (req: Request, res: Response) => {
  try {
    const stars = await MySqlService.getStars();
    res.status(200).json({
      stars,
    });
  } catch (error) {
    console.error(
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching teams",
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
      "[teams.controller][addTeam][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding new team",
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
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching teams",
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
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching teams",
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
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding teams",
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
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when fetching teams",
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
      "[teams.controller][getTeams][Error] ",
      typeof error === "object" ? JSON.stringify(error) : error
    );
    res.status(500).json({
      message: "There was an error when adding teams",
    });
  }
};
