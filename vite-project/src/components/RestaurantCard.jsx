import { imageUrl } from "../utils/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import "./RestaurantCard.css";

RestaurantCard.propTypes= {
    resDetails: PropTypes.object
}

function RestaurantCard(props) {

    const {imageId, offerLine, name, avgRating, deliveryTime, cuisines, location} = props.resDetails;
    
    return (
        <>
            <div className="restaurantCard">
                <img src={`${imageUrl}${imageId}`} width="220px" height="150px" alt="" />
                <h2 className="offer">{offerLine}</h2>
                <span><strong>{name}</strong></span>
                <div className="restaurant-details">
                <div>
                    <span><FontAwesomeIcon icon={faStar} />{avgRating}</span>
                    <span> {deliveryTime}</span>
                </div>
                <span>{cuisines}</span>
                <span>{location}</span>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;