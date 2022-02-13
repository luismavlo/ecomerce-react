import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Searcher } from '../components';
import { getCategoriesThunk, getProductsListThunk } from '../redux/actions';

const Shop = () => {
    const dispatch = useDispatch();
    const shopList = useSelector(state => state.shop.shopList);

    

    useEffect(() => {
        dispatch(getProductsListThunk());
        dispatch(getCategoriesThunk());
    }, [dispatch]);


    return (
        <div className='content-shop'>
            <Searcher />
            <div className='card-list'>
            {
                shopList.map(shop=> (
                    <div className='card' key={shop.id}>
                        <Link to={`/shop/${shop.id}`} id='link-product'>
                            <div className='card-header'>
                                <img src={shop.images?.[0].url} alt="imagen producto" />
                                <img src={shop.images?.[1].url} alt="imagen producto" className='img-dawn'/>
                            </div>
                            <div className='card-footer'>
                                <p>{shop.name}</p>
                                <span>$ {shop.price}</span>
                            </div>
                        </Link>
                    </div>
                ))
            }
            
            </div>
        </div>
    );
};

export default Shop;
