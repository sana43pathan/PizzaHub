import React from "react";
import Data from './Data';
import Prices from './Prices';

const Menu = () => {
  return (
    <div className="prices" id='menu'>
    <h3>Menu</h3>    
    <div className="container">
    <div className="row g-3 d-flex justify-content-center align-items-center">
        { Data.map((val,ind) => {
            return <Prices key={ind} imgsrc={val.imgsrc} title={val.title} price={val.price} />

        })}
    </div>
    </div>
    </div>
  );
}

export default Menu;