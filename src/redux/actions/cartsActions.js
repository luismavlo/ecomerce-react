import axios from "axios";
import swal from "sweetalert";
import { handleError, setIsLoading } from ".";
import { getConfig } from "../../helpers";

export const cartsActions = {
    setCarts: 'SET_CARTS'
}

export const setCarts = carts => ({
    type: cartsActions.setCarts,
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





export const getCartsThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/cart/', getConfig())
                .then(res => dispatch(setCarts(res.data)))
                .catch(error => handleError(error))
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
                    handleError(error);
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
                    handleError(error);
                    showAlertError();
                })
    }
}

