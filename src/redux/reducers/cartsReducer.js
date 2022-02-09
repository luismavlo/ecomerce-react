import { cartsActions } from "../actions";


const INITIAL_STATE = [];


const cartsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case cartsActions.setCarts:
            return action.payload
    
        default:
            return state;
    }
}

export default cartsReducer;