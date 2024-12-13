import { InhancedItemList } from "./ItemList";

const RestroCategory = ({ data, showList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div
      className="w-full bg-gray-100 mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between px-4 py-2">
        <span>
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showList &&
        data.card.card.itemCards.map((card) => (
          <InhancedItemList key={card.card.info.id} data={card} />
        ))}
    </div>
  );
};

export default RestroCategory;
