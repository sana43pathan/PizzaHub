import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
        <Navbar />
        <div className='banner' id='home'>
            
            <div className='banner_content'>
              
                    <div className='banner_text ml-auto'>
                        <h3>Pizza Hub</h3>
                        <h1>PIZZA DELICIOUS</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="banner_btn">
              <a href="#contact" className="btn btn-smart">
                ORDER NOW
              </a>
            </div>
                    </div>
                
            </div>
        </div>
        </>
    )
}

export default Header;