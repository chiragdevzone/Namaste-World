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
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
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
        <button
          className="restro-btn"
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

      <div className="restro-container">
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
