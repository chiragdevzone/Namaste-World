import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestorInfo from "../utils/useRestroInfo";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestroInfo = () => {
  const { id } = useParams();
  const resData = useRestorInfo(id);

  const [showIndex, setShowIndex] = useState(null);

  if (resData == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resData.cards[2].card.card.info;

  return (
    <div className="w-6/12 m-auto text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <h2 className="font-bold text-xs mb-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(
          (card) =>
            card?.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((card, index) => (
          <RestroCategory
            key={index} //bcoz my list is static and it doesn't change during the life cycle
            data={card}
            showList={showIndex === index && true}
            setShowIndex={() => {
              if (showIndex) setShowIndex(null);
              else setShowIndex(index);
            }}
          />
        ))}
    </div>
  );
};

export default RestroInfo;
