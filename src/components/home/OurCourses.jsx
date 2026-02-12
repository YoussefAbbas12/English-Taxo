

const OurCourses = () => {
  return (
    <section className='our-courses'>
      <div className="our-courses-title section-title">
        <h2>Tailored Programs for <span>Every Age</span></h2>
        <p>From phonics for little ones to professional speaking for adults, we have the perfect program for everyone.</p>
      </div>
      <div className="our-courses-content">
        <div className="card">
            <div className="card-content">
                <div className="image">
                    <img loading='lazy' src="/assets/image 4.png" alt="" />
                    <h3>Kids Phonics</h3>
                    <p>Ages 4-8</p>
                </div>
                <p className='headline'>Build strong reading foundations with phonics-based learning.</p>
                <div className="feature">
                    <p><i className="fa-solid fa-check"></i>  Letter recognition & sounds</p>
                    <p><i className="fa-solid fa-check"></i>  Blending & reading skills</p>
                    <p><i className="fa-solid fa-check"></i>  Fun interactive activities</p>
                </div>
            </div>
            <button className='btn our-course-btn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" strokeLinecap="round"/></svg></button>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="image">
                    <img loading='lazy' src="/assets/image 5.png" alt="" />
                    <h3>Kids English</h3>
                    <p>Ages 5-10</p>
                </div>
                <p className='headline'>Comprehensive English for young
                learners with engaging content.</p>
                <div className="feature">
                    <p><i className="fa-solid fa-check"></i> Vocabulary building </p>
                    <p><i className="fa-solid fa-check"></i> Basic grammar & sentences </p>
                    <p><i className="fa-solid fa-check"></i> Speaking confidence </p>
                </div>
            </div>
            <button className='btn our-course-btn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" strokeLinecap="round"/></svg></button>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="image">
                    <img loading='lazy' src="/assets/image 6.png" alt="" />
                    <h3>General English</h3>
                    <p>Ages 10-16</p>
                </div>
                <p className='headline'>Structured English courses following
                CEFR standards.</p>
                <div className="feature">
                    <p><i className="fa-solid fa-check"></i> Reading & writing skills </p>
                    <p><i className="fa-solid fa-check"></i> Grammar mastery </p>
                    <p><i className="fa-solid fa-check"></i> Exam preparation </p>
                </div>
            </div>
            <button className='btn our-course-btn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" strokeLinecap="round"/></svg></button>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="image">
                    <img loading='lazy' src="/assets/image 3.png" alt="" />
                    <h3>Speaking for Adults</h3>
                    <p>Ages 16+</p>
                </div>
                <p className='headline'>Personalized speaking practice for
                professional growth.</p>
                <div className="feature">
                    <p><i className="fa-solid fa-check"></i> Fluency development </p>
                    <p><i className="fa-solid fa-check"></i> Business English </p>
                    <p><i className="fa-solid fa-check"></i> Accent improvement </p>
                </div>
            </div>
            <button className='btn our-course-btn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" strokeLinecap="round"/></svg></button>
        </div>
      </div>      
    </section>
  )
}

export default OurCourses
