import {CDN_URL} from "../utils/constant";

const Card = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData ?. info;
    return (

        <div className="m-4 p-4 w-[245px] bg-gray-200 h-[350px] hover:bg-gray-300 rounded-lg">
            <img src={
                    CDN_URL + cloudinaryImageId
                }
                className="w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg"/>
           
           <h3 className="p-1 pt-2 font-bold">{name}</h3>
            <h4 className="p-1">{
                cuisines.slice(0, 2).join(' ,') + " ..."
            }</h4>
            <h4 className="p-1">{avgRating} stars</h4>
            <h4 className="p-1">{costForTwo}</h4>
           
        </div>
    )
}


// Higher order function

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (Card) => {
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Open</label>
                <Card {...props} />
            </div>
        )
    }
}


export default Card;
