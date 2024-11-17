import { useParams } from "react-router-dom";
import { RES_INFO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestroInfo = () => {
  const [resData, setResData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    resInfo();
  }, []);

  const resInfo = async () => {
    const data = await fetch(RES_INFO_URL + id);
    const json = await data.json();
    console.log(json);

    setResData(json.data);
  };

  if (resData == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resData.cards[2].card.card.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards.map(
          (card) => (
            <li key={card.card.info.id}>
              {card.card.info.name} - Rs.
              {card.card.info.price / 100 || card.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestroInfo;
