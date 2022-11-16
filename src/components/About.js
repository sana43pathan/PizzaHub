import React from 'react'
import pizza_src from "../images/pizza.jpg";

const About = () => {
    return (
        <div className="about" id='about_us'>
            <div className="container about_content">
                <div className="row">
                    <div className="col-6">
                        <h3 className='section_heading'>About Us</h3>
                        <h1>WELCOME TO PIZZA HUB</h1>
                        <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="about_btn">
                            <a href="" className="btn btn-smart">
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src={pizza_src} alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;