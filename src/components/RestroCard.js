import { RES_IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props.restroData;

  return (
    <div className="card-container">
      <div>
        <img
          alt="api-img"
          className="food-img"
          src={RES_IMG_URL + cloudinaryImageId}
        />
      </div>

      <h3>{name}</h3>
      <h3>{avgRating}</h3>
      <h5>{cuisines}</h5>
    </div>
  );
};

export default RestroCard;
