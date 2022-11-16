import React from "react";

export const apiDeleteStarConstellation = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/deleteStarConstellation/${id}`,
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
