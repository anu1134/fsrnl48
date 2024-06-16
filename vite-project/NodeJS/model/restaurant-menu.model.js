import mongoose from "mongoose";

const restaurantMenuSchema = new mongoose.Schema({
    resId: mongoose.Types.ObjectId, 
    menuItems: [
        {
            name : String,
            price: Number,
            rating: Number,
            description: String,
            imageId: String
        }   
    ],
});

const restaurantMenuModel = mongoose.model("restaurantsMenu", restaurantMenuSchema);

export default restaurantMenuModel;


