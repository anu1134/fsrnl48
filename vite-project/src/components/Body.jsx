import RestaurantCard from "./RestaurantCard";
import { restaurantDetails } from "../utils/mockData";
import Search from "./Search";
import TopRatedRestaurants from "./TopRatedRestaurants";
import "./Body.css";

function Body() {
    return(
        <>
            <div className="filtering-components">
                <Search/>
                <TopRatedRestaurants/>
            </div>
            <div className="restaurant-container">
            {
                restaurantDetails.map(res => <RestaurantCard key={res.id} resDetails= {res}/>)
            }
            </div>
            
        </>
    )
}

export default Body;