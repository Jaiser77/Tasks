import React from 'react';
import Img1 from './Images/img3g.avif';
import Img2 from './Images/img4g.jpg';
import Img3 from './Images/gimg3.avif';
import Img4 from './Images/img7g.jpg';

export default function Slider() {
  return (
    <div className='landing-container'>
      <div className='carousel-container' >
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Img1} className="d-block w-100 img-fluid" style={{  maxHeight: "102.2vh",Width: "100%" }}
                 alt="Img1"/>
        <div className="carousel-caption d-none d-md-block">
          <h2>Cultivating Nature's Beauty</h2>
          <p className='p1'>Explore the Art and Science of Gardening</p>
          <button className="btn btn-success">Subscribe</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img2} className="d-block w-100 img-fluid" style={{ maxHeight: "102.2vh",Width: "100%" }}
                  alt="..Img2"/>
        <div class="carousel-caption d-none d-md-block">
          <h2>Blossoming Landscapes</h2>
          <p className='p1'>Transforming Outdoor Spaces into Living Paradises</p>
          <button className="btn btn-success">Subscribe</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img3} className="d-block w-100 img-fluid" style={{maxHeight: "102.2vh",Width: "100%" }}
             alt="Img3"/>
        <div class="carousel-caption d-none d-md-block">
          <h2>Sowing Seeds of Inspiration</h2>
          <p className='p1'>Unveiling the Magic and Joy of Horticulture</p>
          <button className="btn btn-success">Subscribe</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img4} className="d-block w-100 img-fluid" style={{ maxHeight: "102.2vh",Width: "100%" }}
             alt="Img4"/>
        <div class="carousel-caption d-none d-md-block">
          <h2>Harmony in Every Petal</h2>
          <p className='p1'>Crafting Gardens that Reflect Nature's Symphony</p>
          <button className="btn btn-success">Subscribe</button>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </div>
  )
}
