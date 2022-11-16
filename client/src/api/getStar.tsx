export const getStar = async (id: string | number | undefined) => {
  try {
    const apiResponse = await fetch(`http://localhost:777/getStar/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return apiResponse.json();
  } catch (e) {
    console.log(e);
  }
};
