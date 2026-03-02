import React from 'react'

const Vision = () => {
  return (
    <section className='vision'>
        <div className="section-title">
            <h2>Mission <span>& Vision</span></h2>    
        </div>
        <div className="vision-content">
            <div className="content">
                <img src="assets/vision.svg" alt="" />
                <h3>Our Mission</h3>
                <p>To provide accessible, high-quality English education that empowers learners of all ages to communicate confidently, think critically, and succeed in an interconnected world through innovative online teaching methods.</p>
            </div>
            <div className="content">
                <img src="assets/vision2.svg" alt="" />
                <h3>Our Vision</h3>
                <p>To become the leading online English academy in the Middle East and North Africa, recognized for transforming how children, teens, and adults learn English while fostering a love for lifelong learning.</p>
            </div>
        </div>
    </section>
  )
}

export default Vision
