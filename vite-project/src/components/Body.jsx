import RestaurantCard from "./RestaurantCard";
import { restaurantDetails } from "../utils/mockData";
import Search from "./Search";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import "./Body.css";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantDetails);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { setUserName } = useContext(userContext);

  function searchRestaurants(searchText) {
    setSearchText(searchText);
  }

  // api calls
  useEffect(() => {
    console.log("use effect called");
    let searchRestaurants = restaurantDetails.filter((res) =>
      res.name.toUpperCase().includes(searchText.toUpperCase())
    );
    if (isTopRated) {
      searchRestaurants = searchRestaurants.filter(
        (res) => parseFloat(res.avgRating) > 4.5
      );
    }
    setFilteredRestaurants(searchRestaurants);
  }, [searchText, isTopRated]);

  function topRatedRestaurants() {
    setIsTopRated(true);
  }

  return (
    <>
      <div className="filtering-components">
        <Search searchFunction={searchRestaurants} />
        <TopRatedRestaurants topRatedFunction={topRatedRestaurants} />
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((res) => (
          <Link to={"/restaurant/" + res.id} key={res.id}>
            <RestaurantCard key={res.id} resDetails={res} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;

/** Whenever your state variable changes, your component gets rerendered */
/** Hooks--- special type of functions */
