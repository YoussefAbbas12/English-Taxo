import React from 'react'

const Hero = () => {
  return (
    <section className='NewsHero'>
        <div className="CoueseBlur CoueseBlur1"></div>
        <div className="CoueseBlur CoueseBlur2"></div>
        <div className="section-title">
            <h2>News <span>& Updates</span></h2>
            <p>Stay updated with the latest news, achievements, and events from our academy community.</p>
        </div>
        <div className="NewsHeroBody">
            <img src="assets/NewsHero.svg"/>
            <div className="content">
                <span><i className="fa-regular fa-calendar"></i> January 15, 2026</span>
                <div className="text">
                    <h3>New Semester Enrollment Now Open!</h3>
                    <p>We're excited to announce that enrollment for the Spring 2026 semester is now open! Join our growing community of learners and take the next step in your English journey. Early bird discounts available until January 31st.</p>
                </div>
                <button className='btn'>Enroll Now</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
