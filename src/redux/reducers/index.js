import appReducer from "./appReducer";
import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
import shopReducer from "./shopReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    app: appReducer,
    categories: categoriesReducer,
    carts: cartsReducer,
    shop: shopReducer,
    order: orderReducer
});

export default rootReducer;