import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { name, defaultPrice, description, imageId, price } =
    props.data.card.info;

  console.log(props);

  return (
    <div className="border-gray-200 border-b-2 m-6 flex justify-between">
      <div className="text-left w-8/12">
        <span>
          {name}- ₹{defaultPrice ? defaultPrice / 100 : price / 100}
        </span>
        <p className="text-xs mt-2">{description}</p>
      </div>
      <div className="w-4/12 m-4 relative min-h-[50px]">
        {imageId === undefined ? (
          <span className="">Image Not Available</span>
        ) : (
          <img alt="Food Image" src={RES_IMG_URL + imageId} />
        )}
      </div>
    </div>
  );
};

export default ItemList;

const AddButton = (ItemList) => {
  return (props) => {
    const dispatch = useDispatch();

    const handleAddItems = () => {
      dispatch(addItem(props));
    };
    return (
      <div>
        <div className="relative">
          <ItemList {...props} />
          <div className="absolute w-14 px-4 py-1 text-xs bottom-2 right-[100px] bg-black text-white rounded-sm">
            <button onClick={handleAddItems}>Add+</button>
          </div>
        </div>
      </div>
    );
  };
};

const InhancedItemList = AddButton(ItemList);

export { InhancedItemList };
