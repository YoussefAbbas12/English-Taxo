import HomeCard from '../home/HomeCard'

const OurMethodology = () => {

  const whyCards = [
    {
      cardtitle:"Synthetic Phonics",
      carddesc:"Teaching children to convert letters into sounds and blend them to form recognizable words",
      cardimage:"/assets/how1.svg"
    },
    {
      cardtitle:"Analytic Phonics",
      carddesc:"Analyzing letter-sound relationships in previously learned words to decode new words",
      cardimage:"/assets/how2.svg"
    },
    {
      cardtitle:"Analogy Phonics",
      carddesc:"Using parts of words families to help children decode unfamiliar words with similar patterns",
      cardimage:"/assets/how3.svg"
    },
    {
      cardtitle:"Embedded Phonics",
      carddesc:"Teaching phonics skills through authentic reading experiences and meaningful contexts",
      cardimage:"/assets/how4.svg"
    }
  ]

  return (
    <section className='methodology'>
      <div className="methodology-title section-title">
        <h2>How We <span>Teach</span></h2>
        <p>Our teaching philosophy combines proven methodologies with modern technology for an engaging learning experience.</p>
      </div>
      <div className="about-methodology-content">
        {
          whyCards.map((card)=>(
            <HomeCard title={card.cardtitle} desc={card.carddesc} image={card.cardimage} />
          ))
        }
      </div>
    </section>
  )
}

export default OurMethodology
