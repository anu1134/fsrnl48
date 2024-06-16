import { create, fetch } from "../controllers/restaurant-menu.controller.js"

export function menuRoutes(app) {
    app.post("/api/restaurantMenu", create);
    app.get("/api/restaurantMenu/:resId", fetch);
}