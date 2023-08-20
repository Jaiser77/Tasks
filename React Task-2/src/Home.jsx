import React from 'react';

import { Link } from 'react-router-dom';

import Img2 from './Images/img4g.jpg';
import Img3 from './Images/gimg3.avif';
import Img4 from './Images/img7g.jpg';

export default function Home() {
  return (
    <div>
  
      <section className='section border-top home'>
    <div className="container">
       <div className="row">
          <div className='col-md-12 mb-2 text-center'>
               <h3 className='main-heading'>
                Our Services</h3>
                 <div className="underline mx-auto"></div>                                   
          </div>
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Img2} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Exporting</h6>
                   
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic do</p>
                  <Link to ='/Slider' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>
  
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Img3} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Importing</h6>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic do</p>
                  <Link to ='/Slider' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>
 
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Img4} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Pest Management</h6>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic do</p>
                  <Link to ='/Slider' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>

           
       </div>
    </div>
     </section>

    </div>
  )
}
