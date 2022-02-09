import { actions } from "../actions";

const INITIAL_STATE = {
    shopList: [],
    shopDetail: {},
    isLoading: false,
    categories: [],
    carts: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setProducts:
            return{
                ...state,
                shopList: action.payload
            }
        
        case actions.setIsLoading:
            return{
                ...state,
                isLoading: action.payload
            }
        
        case actions.setProductDetail:
            return{
                ...state,
                shopDetail: action.payload
            }

        case actions.setCategories:
            return{
                ...state,
                categories: action.payload
            }

        case actions.setCarts:
            return{
                ...state,
                carts: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;