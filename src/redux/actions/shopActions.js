import axios from "axios";
import { getConfig } from "../../helpers";
import { setIsLoading } from "./appActions";
import { handleError } from ".";

export const shopActions = {
    setProducts: 'SET_PRODUCTS',
    setProductDetail: 'SET_PRODUCT_DETAIL',
}

export const setProducts = product => ({
    type: shopActions.setProducts,
    payload: product
});


export const setProductDetail = product => ({
    type: shopActions.setProductDetail,
    payload: product
})


export const getProductsListThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
                .then(res => dispatch(setProducts(res.data)))
                .catch(error => handleError(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}


export const getProductDetailThunk = id =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
                .then(res => dispatch(setProductDetail(res.data)))
                .catch(error => handleError(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}



export const filterCategoryThunk = id =>{
    return dispatch=>{
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
          .then(res => dispatch(setProducts(res.data)))
          .catch(error => handleError(error))
          .finally(() => dispatch(setIsLoading(false)));
    }
}



export const filterHeadlineThunk  = headline =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${headline}`, getConfig())
                .then(res => dispatch(setProducts(res.data)))
                .catch(error => handleError(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}






