import React from 'react'

function Blog() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12">
            <div className='blog-text'>
              <span className='span1'>Recent</span>
              <span className='span2'>Blog</span>
            </div>
            <div className="blog-paragraph">
              <p>
                Separated they live in. A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 '> <div>
            <div className="card" >
              <img src="https://preview.colorlib.com/theme/kiddos/images/image_1.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Skills To Develop Your Child Memory</h5>
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div></div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 '> <div>
            <div className="card" >
              <img src="https://preview.colorlib.com/theme/kiddos/images/image_2.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Skills To Develop Your Child Memory</h5>
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div></div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 '> <div>
            <div className="card" >
              <img src="https://preview.colorlib.com/theme/kiddos/images/image_3.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Skills To Develop Your Child Memory</h5>
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div></div>
        </div>
      </div>
    </>
  )
}

export default Blog