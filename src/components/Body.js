import RestroCard from "./RestroCard";
import restoList from "../utils/restoList";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <h3>search</h3>
      </div>
      <div className="restro-container">
        {restoList.map((resturant) => {
          return (
            <RestroCard key={resturant.info.id} restroData={resturant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
