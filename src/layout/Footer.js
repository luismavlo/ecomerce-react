import React from 'react';

const Footer = () => {
  return (
    <div className="footer-dark">
    <footer>
        <div className="container-footer">
            <div className="row">
                <div className="col-sm-6 col-md-3 item">
                    <h3>Productos</h3>
                    <ul>
                        <li>Earrings</li>
                        <li>Necklace</li>
                        <li>Ring</li>
                        <li>Bracelets</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>Acerca de</h3>
                    <ul>
                        <li>Compañia</li>
                        <li>Equipo</li>
                        <li>Tiendas Fisicas</li>
                    </ul>
                </div>
                <div className="col-md-6 item text">
                    <h3>Anise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, praesentium vero error dolorem in, debitis veritatis, ullam labore adipisci alias eligendi! Quas ullam, eaque dolor at officiis rem nostrum facilis?.</p>
                </div>
                <div className="col item social"><i className="icon ion-social-facebook"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-instagram"></i></div>
            </div>
            <p className="copyright">Anise Company © 2022</p>
        </div>
    </footer>
</div>
  );
};

export default Footer;
