import React from "react";

export const apiGetConstellation = async (id: string | number | undefined) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/getConstellation/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};
