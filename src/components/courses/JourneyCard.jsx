
const JourneyCard = ({image , level , title , li1,li2,li3,li4,li5=""}) => {
  return (
    <div className="journey-card">
        <div className="card-head">
            <img src={`assets/${image}`} alt="" />
            <div>
                <span>Level {level}</span>
                <h3>{title}</h3>
            </div>
        </div>
        <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            {li5==""?"":<li>{li5}</li>}
        </ul>
    </div>
  )
}

export default JourneyCard
