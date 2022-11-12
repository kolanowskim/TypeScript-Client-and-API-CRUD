import { StarConstellation } from "../types/types";

const addStarConstellation = async (
  starID: number | undefined,
  constellationID: number | undefined
) => {
  console.log(starID, constellationID);

  const data = {
    starID: starID,
    constellationID: constellationID,
  };
  const apiResponse = await fetch("http://localhost:777/addStarConstellation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await apiResponse.json();
  console.log(responseData);
};

export default addStarConstellation;
