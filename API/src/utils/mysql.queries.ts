export const SqlQueries = {
  GetAllStars: `
    SELECT * FROM stars;
    `,

  GetStar: `
    SELECT * FROM stars WHERE id = ?;
    `,

  AddStar: `
    INSERT INTO stars (name, description, link)
    VALUES (?, ?, ?);
    `,

  DeleteStar: `
  DELETE FROM starsconstellations WHERE starID = ?;
  DELETE FROM stars WHERE id = ?;
  `,

  GetAllConstellations: `
    SELECT * FROM constellations;
    `,

  AddConstellation: `
    INSERT INTO constellations (name, description, link)
    VALUES (?, ?, ?);
    `,

  AddStarsConstellations: `
    INSERT INTO starsconstellations (starID, constellationID)
    VALUES (?, ?);
    `,

  GetAllConstellationsForStar: `
    Select distinct starsconstellations.id, starsconstellations.starID, starsconstellations.constellationID, constellations.name
    from starsconstellations inner join constellations on starsconstellations.constellationID = constellations.id
    where starsconstellations.starID = ?;
    `,
};
