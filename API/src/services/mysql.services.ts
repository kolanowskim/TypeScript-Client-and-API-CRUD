import { execute } from "../utils/mysql.connector";

import { SqlQueries } from "../utils/mysql.queries";

import {
  AllStars,
  Star,
  AllConstellations,
  Constellation,
  StarConstellation,
} from "../models/types";

//Stars

export const getStars = async () => {
  return execute<AllStars[]>(SqlQueries.GetAllStars, []);
};

export const getStar = async (id: string) => {
  return execute<Star>(SqlQueries.GetStar, [id]);
};

export const addStar = async (star: Star) => {
  const result = await execute<{ affectedRows: number }>(SqlQueries.AddStar, [
    star.name,
    star.description,
    star.link,
  ]);

  return result.affectedRows > 0;
};

export const deleteStar = async (id: string) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.DeleteStar,
    [id, id]
  );

  return result.affectedRows > 0;
};

//Constellations

export const getConstellations = async () => {
  return execute<AllConstellations[]>(SqlQueries.GetAllConstellations, []);
};

export const addConstellation = async (constellation: Constellation) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.AddConstellation,
    [constellation.name, constellation.description, constellation.link]
  );

  return result.affectedRows > 0;
};

//starsconstellations

export const getAllConstellationsForStar = async (id: string) => {
  return execute<[]>(SqlQueries.GetAllConstellationsForStar, [id]);
};

export const addStarConstellation = async (
  starconstellation: StarConstellation
) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.AddStarsConstellations,
    [starconstellation.starID, starconstellation.constellationID]
  );

  return result.affectedRows > 0;
};
