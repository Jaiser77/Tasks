import React from 'react'

export default function Contact() {
  return (
    <div>
    
      <section className='section contact'>
        <div className='container'>
           <div className='card shadow '>
               <div className='card-body'>
                   <div className='row'>
                       <div className="col-md-6">
                          <h6>Contact Form</h6>
                          <hr/>
                          <div className="form-group">
                             <label for="">Full Name</label>
                             <input type="text" className='form-control' placeholder="Enter Full Name" />
                          </div>
                          <div className="form-group">
                             <label for="">Email</label>
                             <input type="text" className='form-control' placeholder="Enter your Email" />
                          </div>
                          <div className="form-group">
                             <label for="">Message</label>                           
                             <textarea rows="3" className='form-control' placeholder="Type your message"></textarea>
                          </div>
                          <div className="form-group py-3">                           
                             <button type='button' className='btn btn-primary shadow w-100' >Send Message</button>
                          </div>

                       </div>
                       <div className="col-md-6">
                            <h5 className='main-heading'>Address Information</h5>
                          
                            <p>
                               23 Green Street
                               Bloomsville, Gardenia
                               Plantland, PLNT 56789
                               Botanical Realm
                            </p>
                            <p>
                              Phn no: 0123456789
                            </p>
                            <p>
                              Email: 1234@gmail.com
                            </p>
                       </div>
                   </div>
               </div>
           </div>    
       </div>
      </section>
 
    </div>
  )
}
