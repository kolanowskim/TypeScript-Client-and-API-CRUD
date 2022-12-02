import { execute } from "./mysqlConnector";

import { SqlQueries } from "./mysqlQueries";

import { AllStars, Star } from "../models/types";

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

export const updateStar = async (star: Star) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.UpdateStar,
    [star.name, star.description, star.link, star.id]
  );

  return result.affectedRows > 0;
};

export const deleteStar = async (id: string) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.DeleteStar,
    [id, id]
  );

  return result.affectedRows > 0;
};
