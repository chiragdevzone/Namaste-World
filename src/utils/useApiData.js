import { useEffect, useState } from "react";
import { CDN_URL } from "./constants";

const useApiData = () => {
  const [resturant, setResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CDN_URL);

    const jsonData = await data.json();

    const apiData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResturant(apiData);
  };

  return resturant;
};

export default useApiData;
