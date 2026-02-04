import React from 'react'

const Founder = () => {
  return (
    <section className='founder'>
        <div className="section-title">
            <h2>Meet The <span>Founder</span></h2>
      </div>
      <div className="founder-body">
        <div className="founder-content">
            <div className="text">
                <h2>Mr. Faris Rashad</h2>
                <span>Founder & CEO</span>
                <p>With over 8 years of experience in English language education and a deep passion for EdTech, Faris founded English Taxo to revolutionize how students learn English online. His vision of accessible, quality education has helped thousands of families achieve their language learning goals.</p>
            </div>    
            <div className="keys">
                <p className="key">BA English Literature</p>
                <p className="key">CELTA Certified</p>
                <p className="key">Train the Trainer</p>
                <p className="key">55+ Countries Experience</p>
            </div>        
        </div>
        <div className="founder-image">
            <img src="assets/founder.png" loading='lazy'/>
        </div>
      </div>
    </section>
  )
}

export default Founder
