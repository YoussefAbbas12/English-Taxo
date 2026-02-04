import React from 'react'

const Payment = () => {
  return (
    <section className='payment'>
        <div className="section-title">
            <h2>Affordable Plans for <span>Every Family</span></h2>
            <p>Invest in your child's future with our competitive pricing. All plans include access to certified teachers and quality materials.</p>
        </div>
        <div className="payment-content">
            <div className="payment-card">
                <div className="card-head">
                    <h3>Kids & Teens English</h3>
                    <p>Comprehensive English (Age 5-16)</p>
                </div>
                <div className="plans">
                    <div>
                        <p>Starting from</p>
                        <h3>EGP 750 <span>/month</span></h3>
                    </div>
                    <div className="prices">
                        <p><i className="fa-solid fa-check"></i> 2-3 sessions per week</p>
                        <p><i className="fa-solid fa-check"></i> 60-minute classes</p>
                        <p><i className="fa-solid fa-check"></i> Max 6 students per group</p>
                        <p><i className="fa-solid fa-check"></i> CEFR progress tracking</p>
                        <p><i className="fa-solid fa-check"></i> Lesson recordings (1 week)</p>
                        <p><i className="fa-solid fa-check"></i> Free assessment included</p>
                    </div>
                    <button className='btn payment-btn'>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" stroke-linecap="round"/></svg></button>
                </div>
            </div>
            <div className="payment-card active-card">
                <div className="card-head">
                    <h3>Kids & Teens English</h3>
                    <p>Comprehensive English (Age 5-16)</p>
                </div>
                <div className="plans">
                    <div>
                        <p>Starting from</p>
                        <h3>EGP 750 <span>/month</span></h3>
                    </div>
                    <div className="prices">
                        <p><i className="fa-solid fa-check"></i> 2-3 sessions per week</p>
                        <p><i className="fa-solid fa-check"></i> 60-minute classes</p>
                        <p><i className="fa-solid fa-check"></i> Max 6 students per group</p>
                        <p><i className="fa-solid fa-check"></i> CEFR progress tracking</p>
                        <p><i className="fa-solid fa-check"></i> Lesson recordings (1 week)</p>
                        <p><i className="fa-solid fa-check"></i> Free assessment included</p>
                    </div>
                    <button className='btn payment-btn'>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" stroke-linecap="round"/></svg></button>
                </div>
            </div>
            <div className="payment-card">
                <div className="card-head">
                    <h3>Kids & Teens English</h3>
                    <p>Comprehensive English (Age 5-16)</p>
                </div>
                <div className="plans">
                    <div>
                        <p>Starting from</p>
                        <h3>EGP 750 <span>/month</span></h3>
                    </div>
                    <div className="prices">
                        <p><i className="fa-solid fa-check"></i> 2-3 sessions per week</p>
                        <p><i className="fa-solid fa-check"></i> 60-minute classes</p>
                        <p><i className="fa-solid fa-check"></i> Max 6 students per group</p>
                        <p><i className="fa-solid fa-check"></i> CEFR progress tracking</p>
                        <p><i className="fa-solid fa-check"></i> Lesson recordings (1 week)</p>
                        <p><i className="fa-solid fa-check"></i> Free assessment included</p>
                    </div>
                    <button className='btn payment-btn'>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" stroke-linecap="round"/></svg></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Payment
