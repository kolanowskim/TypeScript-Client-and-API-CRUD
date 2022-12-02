import { useState, useEffect } from "react";
import { AllStars } from "../types/types";

const useAllStars = () => {
  const [allStars, setAllStars] = useState<AllStars>();

  const fetchData = async () => {
    try {
      const apiResponse = await fetch("http://localhost:777/stars/getStars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await apiResponse.json();
      setAllStars(json.stars);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { allStars };
};

export default useAllStars;
