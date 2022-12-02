export const getStar = async (id: string | number | undefined) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/stars/getStar/${id}`,
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
    const apiResponse = await fetch("http://localhost:777/stars/addStar", {
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

export const updateStar = async (
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
    const apiResponse = await fetch("http://localhost:777/stars/updateStar", {
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

export const deleteStar = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/stars/deleteStar/${id}`,
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
