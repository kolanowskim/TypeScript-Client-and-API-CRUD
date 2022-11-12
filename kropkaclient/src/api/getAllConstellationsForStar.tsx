const getAllConstellationsForStar = async (id: number) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:777/GetAllConstellationsForStar/${id}`,
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

export default getAllConstellationsForStar;
