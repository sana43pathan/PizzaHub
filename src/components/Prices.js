import React from "react";
import Card from 'react-bootstrap/Card';

const Prices = (props) => {
  return (
    <>
    <Card  className="mx-2 mt-4 card_style text-center">
                
                  <Card.Img variant="top" src={props.imgsrc} style={{ height: '22rem' }} className="mt-3 card_image" alt={props.title}/>
                 
                  <Card.Body>
                  
                    <Card.Title>
                    <p style={{ color:"#000",fontSize:18}}>{props.title}</p>
                    </Card.Title>

                    <Card.Text>
                     <p>₹{props.price}</p>
                    
                    </Card.Text>
                    <a href="#contact" className="btn btn-danger">ORDER NOW</a>
                  </Card.Body>
                </Card>
                </>
  );
}

export default Prices;
