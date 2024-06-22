import restaurantMenuModel from "../model/restaurant-menu.model.js";

export function create(req, res) {

    const resId = req.body.resId;
    const menuItems = req.body.menuItems;
 
    const newRestaurantMenu = new restaurantMenuModel({
             resId,  menuItems
    });

    newRestaurantMenu.save().then(data => {
        if(!data) {
            console.log("checking");
            res.status(400).send("something went wrong");
        }
    
        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
    
}

export function fetch(req, res) {
    console.log("restaurant id ", req.params);
    restaurantMenuModel.findOne({resId: req.params.resId}).then(data => {
        if(!data) {
            res.status(404).json({message: "Data not found"});
        }

        res.send(data);
    }).catch(err => res.status(500).json({message: err.message}));
}


