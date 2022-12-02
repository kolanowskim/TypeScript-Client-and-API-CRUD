import { execute } from "./mysqlConnector";

import { SqlQueries } from "./mysqlQueries";

import { StarConstellation } from "../models/types";

export const getAllConstellationsForStar = async (id: string) => {
  return execute<[]>(SqlQueries.GetAllConstellationsForStar, [id]);
};

export const GetAllStarsForConstellation = async (id: string) => {
  return execute<[]>(SqlQueries.GetAllStarsForConstellation, [id]);
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

export const deleteStarConstellation = async (id: string) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.DeleteStarsConstellations,
    [id]
  );

  return result.affectedRows > 0;
};
