import NewsCard from '../new/NewsCard'

const NewsContainer = () => {

    const cards = [
        {
            image:"post1.svg",
            title:"Student of the Month",
            date:"January 15, 2026",
            name:"Omar Hassan",
            content:"Omar has shown outstanding commitment and consistency in his English learning journey. His active participation, strong speaking improvement, and positive attitude make his a well-deserved Student of the Month. We’re proud of his progress and dedication."
        },
        {
            image:"post2.svg",
            title:"Teacher of the Month",
            date:"January 20, 2026",
            name:"Ahmed Salah",
            content:"Mr. Ahmed has demonstrated exceptional teaching skills and continuous support for his students. His engaging sessions, clear feedback, and motivating approach have made a strong impact on learners’ confidence and fluency."
        },
        {
            image:"post3.svg",
            title:"Event",
            date:"February 22, 2026",
            name:"Parent-Teacher Meeting",
            content:"Our upcoming parent–teacher meetings will be held throughout February. These meetings aim to discuss student progress, strengths, and improvement plans in a clear and supportive environment."
        },
        {
            image:"post4.svg",
            title:"Academy News",
            date:"February 7, 2026",
            name:"New Advanced Speaking Workshop",
            content:"We are launching a new Advanced Speaking Workshop designed for upper-intermediate and advanced learners. The workshop focuses on presentation skills, advanced discussions, and professional communication."
        },
        {
            image:"post5.svg",
            title:"Event",
            date:"January 8, 2026",
            name:"Virtual English Quiz Competition",
            content:"We’re excited to announce our upcoming online English Quiz Competition. Students will test their vocabulary, grammar, and listening skills in a fun and interactive environment. Participation is open to all enrolled learners."
        },
        {
            image:"post6.svg",
            title:"Student of the Month",
            date:"January 18, 2026",
            name:"Sara Ahmed",
            content:"Sara has shown outstanding commitment and consistency in her English learning journey. Her active participation, strong speaking improvement, and positive attitude make her a well-deserved Student of the Month. We’re proud of her progress and dedication."
        }
    ]
    
  return (
    <section className='Filter-section'>
        <div className="filter">
            <div className="filter-buttons">
                <button className='active'>All</button>
                <button>Teachers</button>
                <button>Students</button>
                <button>Events</button>
                <button>Academic News</button>
            </div>
            <i className="fa-solid fa-filter"></i>
        </div>
        <div className="filter-body">
            {
            cards.map((card, index) => (
                <NewsCard
                key={index}
                image={card.image}
                title={card.title}
                date={card.date}
                name={card.name}
                content={card.content}
                />
            ))
            }
        </div>
    </section>
  )
}

export default NewsContainer
