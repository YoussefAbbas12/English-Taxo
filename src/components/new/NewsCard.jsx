import React from 'react'

const NewsCard = ({image, title, date, name ,content}) => {
  return (
    <div className='NewCard'>
        <img src={`assets/${image}`} alt={title} />
        <div className="NewsCardContent">
            <div className="head">
                <p>{title}</p>
                <span>{date}</span>
            </div>
            <div className="text">
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
