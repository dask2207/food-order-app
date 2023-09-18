import Card from "./Card";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurents, setListOfRestaurants] = useState([]); //useState(resList)  before we using useEffect
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);

    const [searchText, setSearchTest] = useState("");

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5374035&lng=77.26197119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);

        // Optional chaining 
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Look Like You Are Offline! Please Check Your Internat.</h1>

    // Condinational Rebdering
    // if(listOfRestaurents.length === 0){
    //     return <Shimmer />;
    // }

    // Now we use ternary operator insted of if condition 

    return listOfRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{setSearchTest(e.target.value)}}
                    />
                    <button className="search-btn" onClick={()=>{
                        console.log(searchText);
                        const filterRestaurents = listOfRestaurents.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurents(filterRestaurents);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={
                        () => {
                            const filteredList = filteredRestaurents.filter((res)=>res.info.avgRating > 4);
                            setFilteredRestaurents(filteredList);
                        }
                }>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                filteredRestaurents.map((resturant, index) => 
                
                <Link className="body-anchor" key={resturant.info.id } to={"/restaurent/"+ resturant.info.id}><Card resData={resturant}/></Link>
                )
            } </div>
        </div>
    )
}

export default Body;
