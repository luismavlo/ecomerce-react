import { shopActions } from "../actions";

const INITIAL_STATE = {
    shopList: [],
    shopDetail: {},
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActions.setProducts:
            return{
                ...state,
                shopList: action.payload
            }
        
        case shopActions.setProductDetail:
            return{
                ...state,
                shopDetail: action.payload
            }
    
        default:
            return state;
    }
}

export default shopReducer;