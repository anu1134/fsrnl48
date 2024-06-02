import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    avgRating: String,
    deliveryTime: String,
    cuisines: String,
    location: String,
    offerLine: String,
    imageId: String
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

export default restaurantModel;


