import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListThunk } from '../redux/actions';


const Orders = () => {

  const dispatch = useDispatch();
  const orderList = useSelector(state => state.order.ordersList);

  useEffect(() => {
    dispatch(getOrderListThunk());
  }, [dispatch]);

  console.log(orderList);

  return (
    <div>Orders</div>
  )
}

export default Orders