import React from 'react'
import Carousel from "react-multi-carousel";
import image1 from '../assets/bg_1.jpg.webp'
import image2 from '../assets/bg_2.jpg.webp'
import certificate from '../assets/certificate.svg'
import teacher from '../assets/teacher.svg'
import student from '../assets/student-icon.svg'
import book from '../assets/find-book-icon.svg'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function Home() {
  return (
    <>
      <div className="container-fluid mb-5 p-0 position-relative">
        <Carousel responsive={responsive}
          showDots={true}
          arrows={false}
          customTransition="all .5"
          transitionDuration={500}>
          <div>
            <div>
              <img src={image1} alt="one" className='carousel-images' />
            </div>
            <div className="home-text">
              <p>Perfect Learned <br /> For Your Child</p>
            </div>
            <div className="home-button">
              <button>Read More</button>
            </div>
          </div>
          <div>
            <div>
              <img src={image2} alt="two" className='carousel-images' />
            </div>
            <div className="home-text">
              <p>Kids Are The Best <br /> Explorers In The World </p>
            </div>
            <div className="home-button">
              <button>Read More</button>
            </div>
          </div>
        </Carousel>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="card-group">
                <div className="card position-relative" style={{ background: "#1eaaf1" }}>
                  <div className="teachers-image">
                    <img src={teacher} alt="teacher" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Certified Teachers</h5>
                    <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
                <div className="card" style={{ background: "#8cc152" }}>
                  <div className="teachers-image">
                    <img src={student} alt="" />

                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Special Education
                    </h5>
                    <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
                <div className="card" style={{ background: "#5d50c6" }}>
                  <div className="teachers-image">
                    <img src={book} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Book & Library
                    </h5>
                    <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
                <div className="card bg-danger">
                  <div className="teachers-image">
                    <img src={certificate} alt="Your SVG" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Certification
                    </h5>
                    <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row m-0">
            <div className="col-8">
              <div>
                <h3>What We Offer</h3>
              </div>
              <div className="para">
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
              </div>
              <div className="row">
                <div className="col-6">
                  <div>
                    <h4>Safety First</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div><h4>Regular Classes</h4></div>
                </div>
              </div>
            </div>
            <div className="col-4 p-4" id='home-left-div'>
              <div>
                <h5>Welcome to Kiddos Learning School</h5>
              </div>
              <div>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
              </div>
              <div>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>
              </div>
              <div>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  )
}

export default Home