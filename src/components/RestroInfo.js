import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestorInfo from "../utils/useRestroInfo";

const RestroInfo = () => {
  const { id } = useParams();
  const resData = useRestorInfo(id);

  if (resData == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resData.cards[2].card.card.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
          (card) => (
            <li key={card?.card?.info?.id}>
              {card?.card?.info?.name} - Rs.
              {card?.card?.info?.price / 100 ||
                card?.card?.info?.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestroInfo;
