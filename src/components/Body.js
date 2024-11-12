import RestroCard from "./RestroCard";
import restoList from "../utils/restoList";
import { useState } from "react";

const Body = () => {
  const [resturant, setResturant] = useState(restoList);
  const [search, setSearch] = useState("");
  function callSetSearch(e) {
    setSearch(e.target.value);
    const filterRestro = restoList.filter(
      (res) => res.info.name.includes(search) == true
    );
    setResturant(() => filterRestro);
  }
  console.log(search);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="restro-btn"
          onClick={() => {
            const filterRestro = restoList.filter(
              (res) => res.info.avgRating > 4
            );
            setResturant(filterRestro);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div>
        <input type="text" value={search} onChange={callSetSearch} />
      </div>
      <div className="restro-container">
        {resturant.map((resturant) => {
          return (
            <RestroCard key={resturant.info.id} restroData={resturant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
