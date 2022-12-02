export const getAllConstellationsForStar = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/starConstellations/GetAllConstellationsForStar/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};

export const getAllStarsForConstellation = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/starConstellations/GetAllStarsForConstellation/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};

export const addStarConstellation = async (
  starID: number | undefined,
  constellationID: number | undefined
) => {
  console.log(starID, constellationID);

  const data = {
    starID: starID,
    constellationID: constellationID,
  };
  const apiResponse = await fetch(
    "http://localhost:777/starConstellations/addStarConstellation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const responseData = await apiResponse.json();
  console.log(responseData);
};

export const deleteStarConstellation = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/starConstellations/deleteStarConstellation/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await apiResponse.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
