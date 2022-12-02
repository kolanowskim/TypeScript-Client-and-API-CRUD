import { useState, useEffect } from "react";
import { AllConstellations } from "../types/types";

const useAllConstellations = () => {
  const [allConstellations, setAllConstellations] =
    useState<AllConstellations>();

  const fetchData = async () => {
    try {
      const apiResponse = await fetch(
        "http://localhost:777/constellations/getConstellations",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await apiResponse.json();
      setAllConstellations(json.Constellations);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { allConstellations };
};

export default useAllConstellations;
