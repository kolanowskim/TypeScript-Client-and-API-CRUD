import React from "react";

export const addNewStar = async (
  name: string,
  description: string,
  link: string
) => {
  const data = {
    name: name,
    description: description,
    link: link,
  };

  try {
    const apiResponse = await fetch("http://localhost:777/addStar", {
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
