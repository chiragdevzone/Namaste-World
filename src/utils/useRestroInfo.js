import { useEffect, useState } from "react";
import { RES_INFO_URL } from "../utils/constants";

const useRestorInfo = (id) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    resInfo();
  }, []);
  const resInfo = async () => {
    const data = await fetch(RES_INFO_URL + id);
    const json = await data.json();
    console.log(json);

    setResData(json.data);
  };

  return resData;
};

export default useRestorInfo;
