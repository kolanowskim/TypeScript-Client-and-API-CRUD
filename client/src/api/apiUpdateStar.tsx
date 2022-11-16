import React from "react";
import { Star } from "../types/types";

export const apiUpdateStar = async (
  id: number,
  name: string,
  description: string,
  link: string
) => {
  const data = {
    id: id,
    name: name,
    description: description,
    link: link,
  };
  try {
    const apiResponse = await fetch("http://localhost:777/updateStar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await apiResponse.json();
    console.log(responseData);
  } catch (e) {
    console.log(e);
  }
};
