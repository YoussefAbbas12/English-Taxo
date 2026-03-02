import React from 'react'

const CourseCard = ({title , p ,image ,third=false}) => {
  return (
    <div className={`course-card ${third?"course-card3":""}`}>
        <img src={`assets/${image}`}/>
        <div className="text">
            <h3>{title}</h3>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default CourseCard
