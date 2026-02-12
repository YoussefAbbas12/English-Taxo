import HomeCard from '../home/HomeCard'

const How = () => {

  const whyCards = [
    {
      cardtitle:"Interactive Learning",
      carddesc:"Active participation through games, discussions, and hands-on activities.",
      cardimage:"/assets/how1.svg"
    },
    {
      cardtitle:"Communicative Approach",
      carddesc:"Focus on real-life conversation skills from day one.",
      cardimage:"/assets/how2.svg"
    },
    {
      cardtitle:"Student-Centered",
      carddesc:"Lessons tailored to each student's level and learning style.",
      cardimage:"/assets/how3.svg"
    },
    {
      cardtitle:"Critical Thinking",
      carddesc:"Encouraging curiosity and independent problem-solving.",
      cardimage:"/assets/how4.svg"
    },
    {
      cardtitle:"Positive Reinforcement",
      carddesc:"Building confidence through encouragement and celebration.",
      cardimage:"/assets/how5.svg"
    },
    {
      cardtitle:"Goal-Oriented Progress",
      carddesc:"Clear milestones aligned with CEFR standards.",
      cardimage:"/assets/how6.svg"
    }
  ]

  return (
    <section className='how'>
      <div className="how-title section-title">
        <h2>How We <span>Teach</span></h2>
        <p>Our teaching philosophy combines proven methodologies with modern technology for an engaging learning experience.</p>
      </div>
      <div className="about-how-content">
        {
          whyCards.map((card , index)=>(
            <HomeCard key={index} title={card.cardtitle} desc={card.carddesc} image={card.cardimage} />
          ))
        }
      </div>
    </section>
  )
}

export default How
