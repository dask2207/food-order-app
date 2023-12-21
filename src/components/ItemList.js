import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) => {
    // console.log(items);
    return <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="border-b-2 p-2 m-2 text-left flex justify-between">
                <div className="w-10/12">
                    <div className="py-2">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span >{" "} - {" "} ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice}</span>
                    </div>

                    <p className="text-xs">{item.card.info.description}</p>
                </div>

                <div className="w-2/12  border-gray-300 border">
                    <div className="absolute">
                        <button className="p-2 bg-black text-white shadow-lg ">Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-full " />
                </div>

            </div>
        ))}
    </div>
}

export default ItemList;