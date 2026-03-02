

const HomeCard = ({title, desc , image}) => {
  return (
    <div className="card">
        <div className="image">
          <img loading='lazy' src={image} alt="" />
        </div>
        <div className="card-text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
    </div>
    )
}
 
export default HomeCard
