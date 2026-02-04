import React from 'react'

const Hero = () => {
  return (
    <section className='about'>
        <img className='about-home-img' src="assets/art.svg" alt="" />
        <div className="section-title">
            <h2>About <span>English Taxo</span></h2>
        </div>
        <div className="about-numbers">
            <div className="about-number">
                <img src="assets/about-Icon1.svg" alt="" />
                <div className="numbers">
                    <h3>11,000+</h3>
                    <p>Happy Students</p>
                </div>
            </div>
            <div className="about-number">
                <img src="assets/about-Icon2.svg" alt="" />
                <div className="numbers">
                    <h3>150+</h3>
                    <p>Certified Teachers</p>
                </div>
            </div>
            <div className="about-number">
                <img src="assets/about-Icon3.svg" alt="" />
                <div className="numbers">
                    <h3>100%</h3>
                    <p>Life Sessions</p>
                </div>
            </div>
            <div className="about-number">
                <img src="assets/about-Icon4.svg" alt="" />
                <div className="numbers">
                    <h3>24/7</h3>
                    <p>Dedicated Support</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
