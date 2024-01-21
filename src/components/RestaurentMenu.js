import { useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const {resId} = useParams();
    const resMenu = useRestaurentMenu(resId);

    const [showIndex, setShowIndex] = useState(null);


    if(resMenu === null ) return  <Shimmer /> 

    const {name, costForTwoMessage, cuisines} = resMenu?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


    // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>

            {/* <ul>
                {itemCards.map((menuData)=>(
                    <li key={menuData.card.info.id}>{menuData.card.info.name} -  {menuData.card.info.price/100 || menuData.card.info.defaultPrice/100}</li>
                ))}
            </ul> */}

            {/* categories accordions */}

            {categories.map((category, index) =>(
            // Controll components
            <RestaurantCategory 
                key={category?.card?.card?.title} 
                data = {category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
            />
            ))}

        </div>
    )
}

export default RestaurentMenu;