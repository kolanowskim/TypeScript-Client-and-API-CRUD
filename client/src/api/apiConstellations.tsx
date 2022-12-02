export const getConstellation = async (id: string | number | undefined) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/constellations/getConstellation/${id}`,
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

export const addNewConstellation = async (
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
    const apiResponse = await fetch(
      "http://localhost:777/constellations/addConstellation",
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
  } catch (e) {
    console.log(e);
  }
};

export const updateConstellation = async (
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
    const apiResponse = await fetch(
      "http://localhost:777/constellations/updateConstellation",
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
  } catch (e) {
    console.log(e);
  }
};

export const deleteConstellation = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/constellations/deleteConstellation/${id}`,
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
