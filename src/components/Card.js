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

        <div className="res-card">
            <img src={
                    CDN_URL + cloudinaryImageId
                }
                className="card-img"/>
            <h3>{name}</h3>
            <h4>{
                cuisines.join(", ")
            }</h4>
            <h4>{avgRating}
                stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default Card;
