import React from 'react'
import '../resources/css/proj Login.css'  
import '../resources/css/index.css';
function Footer() {
  return (
    <>
        <div>
        <footer className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Textile Products</a></li>
                            <li>Canvas Products</li>
                            <li><a href="#">Booking Tents</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>SGM</h3>
                        <p>The prominent and thriving textile industry became the base of an economical part of any country. The textile industry is not a limited field that only has few attributes and closes the chapter.&nbsp;<strong>Textile companies</strong>&nbsp;are the main pillars to get to know about this industry more.<br/></p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">SGM© 2022</p>
            </div>
        </footer>
        </div>
    </>
  )
}

export default Footer