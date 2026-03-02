import { useEffect, useState } from 'react';

const Payment = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/offers')
      .then(res => res.json())
      .then(data => setOffers(Array.isArray(data) ? data : []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className='payment' id='payment'>
      <div className="section-title">
        <h2>Affordable Plans for <span>Every Family</span></h2>
        <p>Invest in your child's future with our competitive pricing. All plans include access to certified teachers and quality materials.</p>
      </div>
      <div className="payment-content">
        {offers.map((offer, index) => (
          <div className={`payment-card ${index === 1 ? 'active-card' : ''}`} key={offer.id}>
            <div className="card-head">
              <h3>{offer.title}</h3>
              <p>{offer.subtitle}</p>
            </div>
            <div className="plans">
              <div>
                <p>Starting from</p>
                <h3>EGP {offer.price} <span>/month</span></h3>
              </div>
              <div className="prices">
                {offer.features.map((feature, i) => (
                  <p key={i}><i className="fa-solid fa-check"></i> {feature}</p>
                ))}
              </div>
              <button className='btn payment-btn'>
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                  <path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="white" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Payment;