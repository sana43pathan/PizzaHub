import React from 'react';


const Navbar = () => {
  return (
    <>
      <div className='main_header'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className='navbar-brand'>
              <i className="fas fa-pizza-slice mr-2" style={{ color: "#dc3545", fontSize: 28 }}></i>
              <span className="logo_text blink_me" id="newFont">Pizza Delicious</span>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about_us">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#shop_section">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#menu">Menu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact Us</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;