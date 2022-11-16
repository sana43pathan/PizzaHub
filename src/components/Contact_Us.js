import React from 'react'

function Contact_Us() {
  return (
    <>
      <div className='my-5' id='contact'>

      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-12">
            <h3 className='my-3 section_heading'>
              Contact Us
            </h3>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name<span className='text-danger'>*</span></label>
              <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Phone Number<span className='text-danger'>*</span></label>
              <input type="text" className="form-control" id="exampleFormControlInput2"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3 submit_btn">
              <button type="submit" className="btn btn-danger">SUBMIT</button>
            </div>
          </div>

          <div className='col-md-2'></div>
          <div className="col-md-4 col-8">
            <h5 className='my-3 mb-1'>Contact Address</h5>
            <div>Sunshine Building, Shop No. 9 & 10, Metro Station, Near D.N.Nagar, Madhuban Colony, D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053</div>

          
          <div className='my-4'>
          <h5 className='mb-1 my-2'>Contact No.</h5>
          <div>022-2572211</div>
          </div>
          


          <div className='my-4'>
          <h5 className='mb-1 my-2'>Working Hours</h5>
          <div>Monday - Sunday</div>
          <div>10 AM to 10 PM</div>
          </div>

          <div className='my-4'>
            <span className='mr-2'><i className="fa-brands fa-facebook social_icons_btn"></i></span>
            <span className='mx-2'><i className="fa-brands fa-twitter social_icons_btn"></i></span>
            <span className='mx-2'><i className="fa-brands fa-youtube social_icons_btn"></i></span>
            <span className='mx-2'><i className="fa-brands fa-instagram social_icons_btn"></i></span>
            <span className='mx-2'><i className="fa-brands fa-pinterest social_icons_btn"></i></span>
          </div>
          </div> 

          

        </div>
     
        </div>

    </>
  )

}

export default Contact_Us;