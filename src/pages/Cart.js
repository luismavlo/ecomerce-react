import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsThunk, removeShoppingCart } from '../redux/actions';

const Cart = () => {

  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts);
  

  useEffect(() => {
    dispatch(getCartsThunk())
  }, [dispatch]);

  const deleteProductCart = id => {
    dispatch(removeShoppingCart(id));
  }

  const getPrice = () =>{
    let totalPrice = 0;

    carts.forEach(cart => {
      totalPrice += Number(cart.quantity) * Number(cart.product.price);
    });
    if(totalPrice !== 0){
      return totalPrice;
    } 
  }

  return (
    <div className='content-shopping-cart'>
      <h2>SHOPPING CART</h2>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {
            carts.map(cart => (
              <tr key={cart.id}>
                <th scope="row">
                  <i className="fas fa-window-close bg" onClick={() => deleteProductCart(cart.id)}></i>
                  <img src={cart.product.images?.[0].url} alt="img producto" className='img-product-car'/>
                  {cart.product.name}
                </th>
                <td className='center'>{cart.quantity}</td>
                <td className='center'>{cart.product.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='tfooter'>
        <h5>Subtotal <small><b>{getPrice()}</b></small> </h5>
        <button>
          checkout
        </button>
      </div>
      
    </div>
  );
};

export default Cart;
