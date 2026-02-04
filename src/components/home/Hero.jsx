

const Hero = () => { 
  return (
    <section className="hero">
      <div className="blur"></div>
      <div className="hero-content">
        <div className="hero-title">
          <div className="hero-text">
            <h1>Welcome to <span>English Taxo</span></h1>
            <p>Premium online English courses for kids, teens, and adults. Learn with certified teachers in live, interactive Zoom classes designed to build real skills and lasting confidence.</p>
          </div>
          <button className='hero-btn btn'>Book Now</button>
        </div>
        <div className="hero-numbers">      
          <img loading='lazy' src="/assets/arrow.png" alt="" className="arrow-image" />
          <div className="numbers-contaier">
            <div className="number">11,000+</div>
            <div className="text">Students Taught</div>
          </div>
          <div className="numbers-contaier">
            <div className="number">50+</div>
            <div className="text">Successful Batches</div>
          </div>
          <div className="numbers-contaier">
            <div className="number">15+</div>
            <div className="text">Countries Served</div>
          </div>
        </div>
      </div>

      <img loading='lazy' src="/assets/Vector.png" alt="" className="hero-image" />
    </section>
  )
}

export default Hero
