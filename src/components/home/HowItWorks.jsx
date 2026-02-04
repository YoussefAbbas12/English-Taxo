import React from 'react'

const HowItWorks = () => {
  return (
    <section className='how'>
        <div className="section-title">
            <h2>How It <span>Works</span></h2>
            <p>Start your English learning journey in 3 simple steps.</p>
        </div>
        <div className="how-content">
            <div className="how-card">
                <div className="image">
                    <img loading='lazy' src="/assets/SVG.svg" alt="" />
                </div>
                <div className="text">
                    <h3>Book Placement Test</h3>
                    <p>Fill out a simple form to schedule your free online placement test.</p>
                </div>
            </div>
            <div className="how-card">
                <div className="image">
                    <img loading='lazy' src="/assets/SVG-1.svg" alt="" />
                </div>
                <div className="text">
                    <h3>Free Assessment</h3>
                    <p>Our team contacts you via WhatsApp to conduct a friendly Zoom assessment.</p>
                </div>
            </div>
            <div className="how-card">
                <div className="image">
                    <img loading='lazy' src="/assets/SVG-2.svg" alt="" />
                </div>
                <div className="text">
                    <h3>Start Learning</h3>
                    <p>Join the right level class with a certified teacher and begin your journey.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
