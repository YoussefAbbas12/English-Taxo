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
                <p>The Story Behind English Taxo

Faris Rashad founded English Taxo with a clear mission: to change the way students learn English online.

After years of teaching students from more than 50 countries, Faris noticed a common problem. Many learners studied English for years, but still struggled to speak confidently in real situations. Traditional courses often focused on memorization and grammar rather than communication and practical language use.

With a Bachelor’s degree in English Education, Cambridge CELTA certification, and an Academic IELTS score of 8.5, Faris had already helped many students achieve real progress. However, he realized that solving the larger problem required more than individual lessons. It required a structured learning system.

That insight led to the creation of English Taxo, a modern learning platform that combines expert teaching, structured curricula, and interactive learning to help students progress step by step.

Today, English Taxo offers programs for children, teens, and adults, helping learners build confidence, communicate effectively, and open new opportunities through English.</p>
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
