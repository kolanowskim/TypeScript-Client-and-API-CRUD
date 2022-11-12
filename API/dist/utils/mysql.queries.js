"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlQueries = void 0;
exports.SqlQueries = {
    GetAllStars: "\n    SELECT * FROM stars;\n    ",
    GetStar: "\n    SELECT * FROM stars WHERE id = ?;\n    ",
    AddStar: "\n    INSERT INTO stars (name, description, link)\n    VALUES (?, ?, ?);\n    ",
    GetAllConstellations: "\n    SELECT * FROM constellations;\n    ",
    AddConstellation: "\n    INSERT INTO constellations (name, description, link)\n    VALUES (?, ?, ?);\n    ",
    AddStarsConstellations: "\n    INSERT INTO starsconstellations (starID, constellationID)\n    VALUES (?, ?);\n    ",
    GetAllConstellationsForStar: "\n    Select distinct starsconstellations.id, starsconstellations.starID, starsconstellations.constellationID, constellations.name\n    from starsconstellations inner join constellations on starsconstellations.constellationID = constellations.id\n    where starsconstellations.starID = ?;\n    ",
};
//# sourceMappingURL=mysql.queries.js.map