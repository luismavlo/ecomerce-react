import axios from "axios";
import { getConfig } from "../../helpers";
import { setIsLoading } from "./appActions";
import { handleError } from ".";

export const ordersActions = {
    setOrders: 'SET_ORDERS'
}

export const setOrders = order =>({
    type: ordersActions.setOrders,
    payload: order
})

export const getOrderListThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/orders/', getConfig())
                .then(res => dispatch(setOrders(res.data)))
                .catch(error => handleError(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}