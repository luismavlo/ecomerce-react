import axios from "axios";
import { setIsLoading } from ".";
import { getConfig } from "../../helpers";
import { handleError } from ".";

export const categoriesActions = {
    setCategories: 'SET_CATEGORIES',
}

export const setCategories = category => ({
    type: categoriesActions.setCategories,
    payload: category
})

export const getCategoriesThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/categories/', getConfig())
                .then(res => dispatch(setCategories(res.data)))
                .catch(error => handleError(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}
