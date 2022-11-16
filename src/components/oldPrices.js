import React from "react";

const Prices = (props) => {
  return (
    
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card text-center" >
  <img src={props.imgsrc} className="card-img-top" alt={props.title} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">&#8377; {props.price}</p>
    <a href="#contact" className="btn btn-danger">ORDER NOW</a>
  </div>
</div>
</div>
  );
}

export default Prices;
