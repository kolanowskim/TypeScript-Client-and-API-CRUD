import { execute } from "./mysqlConnector";

import { SqlQueries } from "./mysqlQueries";

import { AllConstellations, Constellation } from "../models/types";

export const getConstellations = async () => {
  return execute<AllConstellations[]>(SqlQueries.GetAllConstellations, []);
};

export const getConstellation = async (id: string) => {
  return execute<Constellation>(SqlQueries.GetConstellation, [id]);
};

export const addConstellation = async (constellation: Constellation) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.AddConstellation,
    [constellation.name, constellation.description, constellation.link]
  );

  return result.affectedRows > 0;
};

export const updateConstellation = async (constellation: Constellation) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.UpdateConstellation,
    [
      constellation.name,
      constellation.description,
      constellation.link,
      constellation.id,
    ]
  );

  return result.affectedRows > 0;
};

export const deleteConstellation = async (id: string) => {
  const result = await execute<{ affectedRows: number }>(
    SqlQueries.DeleteConstellation,
    [id, id]
  );

  return result.affectedRows > 0;
};
