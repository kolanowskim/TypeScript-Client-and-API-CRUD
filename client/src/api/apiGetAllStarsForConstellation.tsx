import React from "react";

export const apiGetAllStarsForConstellation = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/GetAllStarsForConstellation/${id}`,
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
