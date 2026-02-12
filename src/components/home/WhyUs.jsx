import HomeCard from './HomeCard'

const Why = () => {

  const whyCards = [
    {
      cardtitle:"Live Zoom Classes",
      carddesc:"100% interactive sessions with recorded lessons for revision",
      cardimage:"/assets/microscope.svg"
    },
    {
      cardtitle:"Small Groups",
      carddesc:"Maximum 5-6 students for personalized attention",
      cardimage:"/assets/people.svg"
    },
    {
      cardtitle:"Certified Teachers",
      carddesc:"Experienced educators with CELTA certification",
      cardimage:"/assets/true.svg"
    },
    {
      cardtitle:"3-Way Support",
      carddesc:"Teacher, Supervisor & Student Admin for each class",
      cardimage:"/assets/like.svg"
    },
    {
      cardtitle:"Progress Tracking",
      carddesc:"CEFR-aligned curriculum with clear milestones",
      cardimage:"/assets/chart.svg"
    },
    {
      cardtitle:"Fun & Interactive",
      carddesc:"Games, stories, and child-friendly activities",
      cardimage:"/assets/game.svg"
    }
  ]

  return (
    <section className='why'>
      <div className="why-title section-title">
        <h2>Why Parents <span>Trust English Taxo</span></h2>
        <p>We combine the best teaching methods with technology to create an exceptional learning experience.</p>
      </div>
      <div className="why-content">
        {
          whyCards.map((card , index)=>(
            <HomeCard key={index} title={card.cardtitle} desc={card.carddesc} image={card.cardimage} />
          ))
        }
      </div>
    </section>
  )
}

export default Why
