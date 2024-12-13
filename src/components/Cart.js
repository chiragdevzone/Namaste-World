import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const totalItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearButton = () => {
    dispatch(clearItems());
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">Total Item - {totalItems.length}</h1>
      <button
        className="rounded-lg p-2 m-2 text-white bg-black"
        onClick={handleClearButton}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {totalItems.map((item) => (
          <ItemList key={item.data.card.info.id} data={item.data} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
