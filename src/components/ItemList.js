import { RES_IMG_URL } from "../utils/constants";

const ItemList = (props) => {
  //   console.log(props.data.card.info);

  const { name, defaultPrice, description, imageId, price } =
    props.data.card.info;
  return (
    <div className="border-gray-200 border-b-2 m-6 flex justify-between">
      <div className="text-left w-8/12">
        <span>
          {name}- ₹{defaultPrice ? defaultPrice / 100 : price / 100}
        </span>
        <p className="text-xs mt-2">{description}</p>
      </div>
      <div className="w-4/12 m-4 relative">
        <img alt="Food Image" src={RES_IMG_URL + imageId} />
        <div className="absolute w-14 px-4 py-1 text-xs bottom-[-10px] left-0 right-0 mx-auto my-0 bg-black text-white rounded-sm">
          <button>Add+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
