import appReducer from "./appReducer";
import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import cartsReducer from "./cartsReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
    app: appReducer,
    categories: categoriesReducer,
    carts: cartsReducer,
    shop: shopReducer
});

export default rootReducer;