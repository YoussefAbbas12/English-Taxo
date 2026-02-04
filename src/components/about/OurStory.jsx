import React from 'react'

const OurStory = () => {
  return (
    <section className='our-story'>
        <h2>Out Story</h2>
        <div className="our-story-content">
            <div className="our-story-text">
                <p>English Taxo was founded in 2020 with a simple yet powerful vision: to break down the barriers of traditional English education and bring world-class language learning to students everywhere through technology.</p>
                <p>What started as a small team of passionate educators has grown into a thriving community of over 11,000 students across the Middle East and beyond. Our certified teachers, innovative curriculum, and personalized approach have helped thousands of learners—from young children taking their first steps in phonics to adults mastering professional communication skills.</p>
            </div>
            <div className="our-story-image">
                <div className="year">
                    <h4>2020</h4>
                    <p>Year Founded</p>
                </div>
                <div className="contry">
                    <div className="experince">
                        <h4>4+</h4>
                        <p>Years Experience</p>
                    </div>
                    <div className="experince">
                        <h4><img src="assets/flags.svg" /> 15+</h4>
                        <p>Contries Served</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurStory
