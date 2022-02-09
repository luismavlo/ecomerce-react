import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter';
import { addCartThunk, filterCategoryThunk, getProductDetailThunk } from '../redux/actions';


const ShopDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(state => state.shop.shopDetail);
  const shopList = useSelector(state => state.shop.shopList);
  const { counter, increment, decrement } = useCounter(1);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id]);

  useEffect(() => {
    dispatch(getProductDetailThunk(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    if(product.category)
      dispatch(filterCategoryThunk(product.category.id))
  }, [dispatch, product])

  const addCart = () =>{
    const shoppingCart = {
      product: id,
      quantity: counter
    }

    dispatch(addCartThunk(shoppingCart))
  }

  

  return (
  <div >
    <div className='content-product-detail'>
      <div className='carrousel-products-images'>
        <div className='content-carrousel'>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={product.images?.[0].url} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">                 
                  <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={product.images?.[1].url} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={product.images?.[2].url} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={product.images?.[3]?.url} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='detail-product-info'>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <div className='quantity-order'>
          <span>quantity</span>
          <div className='quantity-buttons'>
            <button onClick={decrement}> - </button>
            <span className='quantity'>{counter}</span>
            <button onClick={increment}> + </button>
          </div>
          <input type="button" value="Add to car" onClick={addCart}/>
        </div>
      </div>
    </div>
    <hr className='hr'/>
    <div>
    <span className='flex-col-center'>related products</span>
    </div>
    <hr className='hr'/>
    <div className='content-shop'>
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
  </div>
  );
};

export default ShopDetail;
