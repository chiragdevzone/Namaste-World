import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useApiData from "../utils/useApiData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const resturant = useApiData();
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredResturant(resturant);
  }, [resturant]);

  if (onlineStatus === false)
    return <h1>Looks like you have lost your internet connection..!!</h1>;

  if (resturant.length === 0) {
    return <Shimmer />;
  }

  return resturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="mb-4 flex justify-between">
        <div className="flex">
          <input
            className="border-black border-2 border-solid px-2 py-1 rounded-md mx-2"
            placeholder="Search Resturant..."
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded-md"
            onClick={() => {
              const filterRestro = resturant.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase()) ==
                  true
              );
              setFilteredResturant(filterRestro);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-gray-200 px-4 py-2 mx-4 rounded-md"
            onClick={() => {
              const filterRestro = resturant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResturant(filterRestro);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center">
        {filteredResturant.map((resturant) => {
          return (
            <Link
              to={"restaurant/" + resturant.info.id}
              key={resturant.info.id}
            >
              <RestroCard restroData={resturant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
