import RestaurantCard from "./RestaurantCard";
import { restaurantDetails } from "../utils/mockData";
import Search from "./Search";
import { useState } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import "./Body.css";

function Body() {

    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantDetails);
    // const [isTopRated, setIsTopRated] = useState(false);
    // const [isSearch , setIsSearch] = useState(false);

    function searchRestaurants(searchText) {
        console.log("search", searchText);
        let searchRestaurants  = restaurantDetails.filter(res => res.name.toUpperCase().includes(searchText.toUpperCase()));
        setFilteredRestaurants(searchRestaurants);
        // setIsSearch(true);


        console.log("Filtered", searchRestaurants);
    }

    // api calls
    // useEffect(() => {
    //     console.log("coming here......")
    //     if (isTopRated)  {
    //         console.log("coming here");
    //         let topRatedRestaurants = filteredRestaurants.filter(res => parseFloat(res.avgRating) > 4.5);
    //         setFilteredRestaurants(topRatedRestaurants);
    //     } 

    // }, [isSearch, isTopRated]);

    function topRatedRestaurants() {
        // setIsTopRated(true);
        let topRatedRestaurants = filteredRestaurants.filter(res => parseFloat(res.avgRating) > 4.5);
        setFilteredRestaurants(topRatedRestaurants);   
    }

    return(
        <>
        {console.log("component rendered")}
            <div className="filtering-components">
                <Search searchFunction={searchRestaurants}/>
                <TopRatedRestaurants topRatedFunction = {topRatedRestaurants}/> 
            </div>
            <div className="restaurant-container">
            {
                filteredRestaurants.map(res => <RestaurantCard key={res.id} resDetails= {res}/>)
            }
            </div>
            
        </>
    )
}

export default Body;

/** Whenever your state variable changes, your component gets rerendered */
/** Hooks--- special type of functions */