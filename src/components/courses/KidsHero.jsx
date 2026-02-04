import React from 'react'

const KidsHero = ({title1 , title2 , span , p , image , span1 , span2 , span3}) => {
  return (
    <section className='kids-hero'>
        <div className="CoueseBlur CoueseBlur1"></div>
        <div className="CoueseBlur CoueseBlur2"></div>
        <div className="left">
            <h3>{title1} <br/> {title2} <span>{span}</span></h3>
            <p>{p}</p>
            <button className='btn'>Book Now</button>
        </div>
        <div className="right">
            <span className='frist'>{span1}</span>
            <span className='secound'>{span2}</span>
            <span className='third'>{span3}</span>
            <img src={`assets/${image}`} alt="" />
        </div>
    </section>
  )
}

export default KidsHero
