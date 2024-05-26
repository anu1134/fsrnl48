import PropTypes from 'prop-types';

TopRatedRestaurants.propTypes= {
    topRatedFunction: PropTypes.func
}

function  TopRatedRestaurants(props) {
    return (
        <div className="topratedrestaurant">
            <button onClick={props.topRatedFunction}>TopRatedRestaurants</button>
        </div>
    )
}

export default TopRatedRestaurants;