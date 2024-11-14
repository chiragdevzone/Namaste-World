import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturant, setResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    const apiData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResturant(apiData);
    setFilteredResturant(apiData);
  };
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
            <RestroCard key={resturant.info.id} restroData={resturant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
