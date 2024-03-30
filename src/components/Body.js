import Card, {withPromotedLabel} from "./Card";
import { useState, useEffect, useContext } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurents, setListOfRestaurants] = useState([]); //useState(resList)  before we using useEffect
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);

    const [searchText, setSearchTest] = useState("");


    // console.log(listOfRestaurents);

    const RestaurantCardPromoted = withPromotedLabel(Card);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6266383&lng=77.0611235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);

        // Optional chaining 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Look Like You Are Offline! Please Check Your Internet.</h1>

    // Condinational Rebdering
    // if(listOfRestaurents.length === 0){
    //     return <Shimmer />;
    // }

    // Now we use ternary operator insted of if condition 

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body-container w-10/12 m-auto" >
            <div className="container w-12/12 justify-center flex flex-wrap">
                <div className="search m-4 p-4">
                    <input type="text"
                        className=" border border-solid border-grey px-8 py-3 outline-none rounded-bl-lg rounded-tl-lg"
                        value={searchText}
                        onChange={(e) => { setSearchTest(e.target.value) }} placeholder="Search..."
                    />
                    <button className=" px-8 py-3 border border-solid border-green bg-green-200 my-4 rounded-tr-lg rounded-br-lg" onClick={() => {
                        console.log(searchText);
                        const filterRestaurents = listOfRestaurents.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurents(filterRestaurents);
                    }}>Search</button>
                </div>
                <div className="flex items-center">
                    <button className="px-4 py-3 bg-gray-200 m-4 rounded-lg"
                        onClick={
                            () => {
                                const filteredList = filteredRestaurents.filter((res) => res.info.avgRating > 4);
                                setFilteredRestaurents(filteredList);
                            }
                        }>Top Rated Restaurants</button>
                </div>

                {/* <div className="flex items-center">
                    <label>User Name : </label>
                    <input className="border border-solid border-grey px-8 py-3 outline-none rounded-lg  ms-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div> */}
            </div>

            <div className="w-[100%] m-auto container justify-center flex flex-wrap">
                {
                    filteredRestaurents.map((resturant, index) =>

                        <Link 
                        className="body-anchor" key={resturant.info.id}
                         to={"/restaurent/" + resturant.info.id}>

                            {/* If the restaurant is promoted then add a promoted label on it  */}
                            {resturant.info.isOpen ? (<RestaurantCardPromoted resData={resturant} />) : (<Card resData={resturant} />)}
                            
                            </Link>
                    )
                } </div>
        </div>
    )
}

export default Body;
