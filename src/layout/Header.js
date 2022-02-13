import { getConfig } from '../helpers';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import refer from '../assets/refer.png'

const Header = () => {

  const navigate = useNavigate();

  const redirectLogIn = () => navigate('/login')

  const back = () => navigate(-1);

  const cartShopping = () => navigate('/cart')

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/')
  }   

  return (
    <>
      <input type="checkbox" id='hamburger-icon' className='checkbox-menu'/>
        <label htmlFor="hamburger-icon" className='label-hamburger-icon'>
          <i className="fas fa-bars"></i>
      </label>
      <header>
        <div className='social'>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className='main-header'>
          <h1>Anise</h1>
          <nav>
            <ul>
              
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/' className='link'>About</Link></li>
              <li><Link to='/' className='link'>Contact</Link></li>
              {
                getConfig().headers.Authorization !== 'Bearer ' ? (
                  <li><Link to='/orders' className='link'>My Orders</Link></li>
                ) : (
                  <li><Link to='/' className='link'>Journal</Link></li>
                )
              }
              
            </ul>
          </nav>
        </div>
        <div className='option-sign'>
          {
            getConfig().headers.Authorization !== 'Bearer ' ? (
              <div className='content-icons-shop-out'>
              <i className="fas fa-shopping-cart" onClick={cartShopping}></i>
              &nbsp;
              &nbsp;
              <i className="fas fa-arrow-left" onClick={back}></i>
              &nbsp;
              &nbsp;
              <i className="fas fa-sign-out-alt" onClick={logOut}></i>  
              </div>
            ) : (
              <img src={refer} alt="log In" className='icon-logIn' onClick={redirectLogIn}/>
            )
          }
          
        </div>
      </header>
    </>
  );
};

export default Header;
