import { ordersActions } from "../actions";

const INITIAL_STATE = {
    ordersList: []
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ordersActions.setOrders:
            return{
                ...state,
                ordersList: action.payload
            }
    
        default:
            return state;
    }
}

export default orderReducer;