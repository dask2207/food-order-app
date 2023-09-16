import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";

const RestaurentMenu = () => {
    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, [])
 
    const fetchMenu = async () =>  {
        const data = await fetch(Menu_API+resId);

        const json = await data.json();
        console.log(json);
        setResMenu(json.data);
    }

    if(resMenu === null ) return  <Shimmer /> 

    const {name, costForTwoMessage, cuisines} = resMenu?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>

            <ul>
                {itemCards.map((menuData)=>(
                    <li key={menuData.card.info.id}>{menuData.card.info.name} -  {menuData.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurentMenu;