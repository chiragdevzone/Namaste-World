import { RES_IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props.restroData;

  return (
    <div className="w-[250px] h-[350px] m-2 p-4 bg-gray-200  ">
      <img
        alt="api-img"
        className="h-[60%] w-[100%]"
        src={RES_IMG_URL + cloudinaryImageId}
      />

      <h3 className="font-semibold py-2">{name}</h3>
      <h3 className="mb-2">
        Rating
        <span
          className={`${
            avgRating >= 4
              ? "text-green-500 border-[2px] border-green-500 rounded-sm px-4"
              : "text-yellow-500 border-[2px] border-yellow-500 rounded-sm px-4"
          }  mx-2 `}
        >
          {avgRating}
        </span>
      </h3>
      <h5 className="text-xs">{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestroCard;
