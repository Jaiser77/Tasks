import React from 'react'

function Contact() {
  return (
    <div className='child-container' id='contact'>
        <div className="container text-center mt-5">
      <h2>Contact Us</h2>
      <p>We're here to answer any questions you have about our gym. Reach out to us and we'll respond as soon as we can.</p>
      
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact