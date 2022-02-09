import axios from "axios";
import swal from "sweetalert";
import { getConfig } from "../../helpers";

export const actions = {
    setProducts: 'SET_PRODUCTS',
    setProductDetail: 'SET_PRODUCT_DETAIL',
    setIsLoading: 'SET_IS_LOADING',
    setCategories: 'SET_CATEGORIES',
    setCarts: 'SET_CARTS'
}

export const setProducts = product => ({
    type: actions.setProducts,
    payload: product
});

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const setProductDetail = product => ({
    type: actions.setProductDetail,
    payload: product
})

export const setCategories = category => ({
    type: actions.setCategories,
    payload: category
})


export const setCarts = carts => ({
    type: actions.setCarts,
    payload: carts
})

const showAlertSuccess = (title, text) =>{
    swal({
        title: title,
        text: text,
        icon: 'success',
        timer: '1500'
    })
}



const showAlertError = () =>{
    swal({
        title: 'Error',
        text: 'Ha surgido un error inesperado, intentelo más tarde',
        icon: 'error',
        timer: '2000'
    })
}

export const getProductsListThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
                .then(res => dispatch(setProducts(res.data)))
                .catch(error => console.log(error.response))
                .finally(() => dispatch(setIsLoading(false)));
    }
}

export const getProductDetailThunk = id =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
                .then(res => dispatch(setProductDetail(res.data)))
                .catch(error => console.log(error.response))
                .finally(() => dispatch(setIsLoading(false)));
    }
}

export const getCategoriesThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/categories/', getConfig())
                .then(res => dispatch(setCategories(res.data)))
                .catch(error => console.log(error))
                .finally(() => dispatch(setIsLoading(false)));
    }
}

export const filterCategoryThunk = id =>{
    return dispatch=>{
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
          .then(res => dispatch(setProducts(res.data)))
          .catch(error => console.log(error.response))
          .finally(() => dispatch(setIsLoading(false)));
    }
}

export const filterHeadlineThunk  = headline =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${headline}`, getConfig())
                .then(res => dispatch(setProducts(res.data)))
                .catch(error => console.log(error.response))
                .finally(() => dispatch(setIsLoading(false)))
    }
}

export const getCartsThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/cart/', getConfig())
                .then(res => dispatch(setCarts(res.data)))
                .catch(error => console.log(error.response))
                .finally(() => dispatch(setIsLoading(false))) 
    }
}

export const addCartThunk = shoppingCart => {
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/', shoppingCart, getConfig())
                .then(() => {
                    dispatch(getCartsThunk());
                    showAlertSuccess('Producto agregado exitosamente','El producto se ha agregado exitosamente a la canasta de compra, revisa que otros productos de nuestra tienda te gustaron');
                })
                .catch( error => {
                    console.log(error);
                    showAlertError(showAlertError());
                })
                .finally(() => dispatch(setIsLoading(false)));
    }
}

export const removeShoppingCart = id => {
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
                .then(() => {
                    dispatch(getCartsThunk())
                    showAlertSuccess('Producto eliminado', 'Producto eliminado del carrito exitosamente, por favor busca otros productos de tu interes')
                })
                .catch(error =>{
                    console.log(error);
                    showAlertError();
                })
    }
}

