import React from 'react';


const Navbar = () => {
  return (
    <>
      <div className="container nav_bg navbar_text">
        <div className='row'>
          <div className='col-10 mx-auto'>
           
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="logo">
            <i className="fas fa-pizza-slice mr-2" style={{color:"#dc3545",fontSize:28}}></i>
          <span className="logo_text blink_me" id="newFont">Pizza Delicious</span>
        </div>
              <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 navbar_ul">
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
        </div>
      </div>
    </>
  )
}

export default Navbar;