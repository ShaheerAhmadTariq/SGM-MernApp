import React from 'react'

function Landing() {
  return (
    <>
        <div style={{height: "100vh", marginRight: "0px", marginLeft: "0px", width: "100%",paddingRight: "0px",paddingLeft: "0px"}}>
        
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
            <div className="carousel-inner d-flex">
                <div className="carousel-item active">
                    <div className="carousel-content centerAlign">
                        <span className="centerContent"><h1 className="centerContent">Welcome To SGM Industries</h1>
                            <h5 className="centerContent">We make and export Canvas Products</h5>
                        </span>
                        <br/>
                        <button className="btn btn-info centerContent">Get Started</button>
                    </div>
                    <img className="img-fluid w-100 d-block" src=".resources/images/slide01.jpg" alt="Slide Image"/>
                    
                </div>
                <div className="carousel-item">
                    <div className="carousel-content">
                        <span><h1>We make the best Outdoor Tents</h1></span>
                    </div>
                    <img className="img-fluid w-100 d-block" src="assets/img/slide02.jpg" alt="Slide Image"/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-content">
                        <span><h1>Are you interested in our Buisness</h1></span>
                    </div>
                    <img className="img-fluid w-100 d-block" src="assets/img/pexels-pixabay-236748.jpg" alt="Slide Image"/>
                </div>
            </div>
            <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
            <ol className="carousel-indicators">
                <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
            </ol>
            </div>
        
    </div>
    </>
  )
}

export default Landing