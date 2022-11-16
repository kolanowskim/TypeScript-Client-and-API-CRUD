export const SqlQueries = {
  //Stars
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

  UpdateStar: `
    UPDATE stars SET
    name = ?,
    description = ?,
    link = ?
    WHERE id = ?;
    `,

  DeleteStar: `
    DELETE FROM starsconstellations WHERE starID = ?;
    DELETE FROM stars WHERE id = ?;
  `,

  //Constellations
  GetAllConstellations: `
    SELECT * FROM constellations;
    `,
  GetConstellation: `
    SELECT * FROM constellations WHERE id = ?;
    `,

  AddConstellation: `
    INSERT INTO constellations (name, description, link)
    VALUES (?, ?, ?);
    `,

  UpdateConstellation: `
    UPDATE constellations SET
    name = ?,
    description = ?,
    link = ?
    WHERE id = ?;
    `,

  DeleteConstellation: `
    DELETE FROM starsconstellations WHERE constellationID = ?;
    DELETE FROM constellations WHERE id = ?;
  `,

  //StarConstellations

  GetAllConstellationsForStar: `
    Select distinct starsconstellations.id, starsconstellations.starID, starsconstellations.constellationID, constellations.name
    from starsconstellations inner join constellations on starsconstellations.constellationID = constellations.id
    where starsconstellations.starID = ?;
    `,

  GetAllStarsForConstellation: `
    Select distinct starsconstellations.id, starsconstellations.starID, starsconstellations.constellationID, stars.name
    from starsconstellations inner join stars on starsconstellations.starID = stars.id
    where starsconstellations.constellationID = ?;
    `,

  AddStarsConstellations: `
      INSERT INTO starsconstellations (starID, constellationID)
      VALUES (?, ?);
      `,

  DeleteStarsConstellations: `  
    DELETE FROM starsconstellations WHERE id = ?;
    `,
};
