import React from 'react'

function Pricing() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className='blog-text'>
              <span className='span1'>Our</span>
              <span className='span2'>Pricing</span>
            </div>
            <div className="blog-paragraph">
              <p>
                Separated they live in. A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia. It is a paradisematic country
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
            <div className="card" style={{ width: 'rem' }}>
              <div className='plan-name'>
                <h3>Basic</h3>
              </div>
              <div className='plan-price'>
                <h3> <span className="price-span">$24.50</span> <span className="price-span1">/ 5mos</span> </h3>
              </div>
              <img src="https://preview.colorlib.com/theme/kiddos/images/bg_1.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary" id="button1">Take A Course</a>
              </div>
            </div>

          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
            <div className="card" style={{ width: 'rem' }}>
              <div className='plan-name'>
                <h3>Standard</h3>
              </div>
              <div className='plan-price'>
                <h3> <span className="price-span">$34.50</span> <span className="price-span1">/ 5mos</span> </h3>
              </div>
              <img src="https://preview.colorlib.com/theme/kiddos/images/bg_2.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary" id="button2">Take A Course</a>
              </div>
            </div>

          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
            <div className="card" style={{ width: 'rem' }}>
              <div className='plan-name'>
                <h3>premium
                </h3>
              </div>
              <div className='plan-price'>
                <h3> <span className="price-span">$54.50</span> <span className="price-span1">/ 5mos</span> </h3>
              </div>
              <img src="https://preview.colorlib.com/theme/kiddos/images/bg_3.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary" id="button3">Take A Course</a>
              </div>
            </div>

          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
            <div className="card" style={{ width: 'auto' }}>
              <div className='plan-name'>
                <h3>Platinum</h3>
              </div>
              <div className='plan-price'>
                <h3> <span className="price-span">$89.50</span> <span className="price-span1">/ 5mos</span> </h3>
              </div>
              <img src="https://preview.colorlib.com/theme/kiddos/images/bg_5.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <a href="#" className="btn btn-primary" id="button4">Take A Course</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing