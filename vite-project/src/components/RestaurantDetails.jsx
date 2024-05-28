import { useParams } from "react-router-dom";

function RestaurantDetails() {
    const params = useParams();

    console.log("params", params.resId);
    return (
        <>
            <h1>Restaurant Details</h1>
            <h2>Restaurant Id: {params.resId}</h2>
        </>
    )
}

export default RestaurantDetails;