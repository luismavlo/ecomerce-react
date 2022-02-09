import React from 'react';
import { Header, Footer } from '../layout';
import {joya, collar,carrousel,carrousel1,carrousel2} from '../assets'
import { Link } from 'react-router-dom';


const Home = () => {



  return (
    <>
      <Header />
      <section className='sections-container'>
        <div className='hero'>
          <img src={joya} alt="imagen promocional" />
          <div className='banner'>
            <span>NEW COLLECTION</span>
            <p>Universal - <Link to='/' className='link-shop-now'>Shop Now</Link></p>
          </div>
        </div>
        <div className='container-sec'>
          <div className='promotion'>
            <p>We create modern gold and sterling silver jewelry with a focus on timeless designs, local production, and responsibly sourced materials.</p>
            <Link to='/' className='btn-classic'>Our Story</Link>
          </div>
          <div className='product-promotion'>
            <img src={collar} alt='imagen collar' />
          </div>
        </div>
        <div className='section-articles'>
          <div className='banner-text'>
            <h2>Effortless pieces, timeless style</h2>
            <div className='promotion'>
              <p>We design each of our collections with the intention of creating pieces that can be passed down through generations, with minimal waste and minimal carbon footprint.</p>
              <Link to='/' className='btn-classic mg-10'>Shop Now</Link>
            </div>
          </div>
          <div className='carrousel-products-images-home'>
            <div className='content-carrousel'>
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={carrousel} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={carrousel1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <p>"Una joya tiene el poder de ser esa cosa pequeña que puede hacerte sentir unica"</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={carrousel2} className="d-block w-100" alt="..." />
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
