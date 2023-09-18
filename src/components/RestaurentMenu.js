import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const {resId} = useParams();
    const resMenu = useRestaurentMenu(resId);


    if(resMenu === null ) return  <Shimmer /> 

    const {name, costForTwoMessage, cuisines} = resMenu?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>

            <ul>
                {itemCards.map((menuData)=>(
                    <li key={menuData.card.info.id}>{menuData.card.info.name} -  {menuData.card.info.price/100 || menuData.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurentMenu;