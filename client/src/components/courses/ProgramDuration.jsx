import React from 'react'

const ProgramDuration = ({frhstH3 , frhstP , secoundH3 , secoundP , thirdH3 , thirdP , fourthH3 , fourthP ,students,live,recorded,date}) => {
  return (
    <section className='ProgramDuration'>
        <div className="section-title">
            <h2>Program Duration <span>& Structure</span></h2>
            <p>Start your English learning journey in 3 simple steps.</p>
        </div>
        <div className="ProgranData">
            <div className="top">
                <div className="top-card">
                    <img src="assets/program1.png"/>
                    <div>
                        <h3>{frhstH3}</h3>
                        <p>{frhstP}</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program2.png"/>
                    <div>
                        <h3>{secoundH3}</h3>
                        <p>{secoundP}</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program3.png"/>
                    <div>
                        <h3>{thirdH3}</h3>
                        <p>{thirdP}</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program4.png"/>
                    <div>
                        <h3>{fourthH3}</h3>
                        <p>{fourthP}</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-head">
                    <h3>Small Group Learning Excellence</h3>
                    <p>All classes are live on Zoom, recorded for one week, and supported by personalized feedback and homework.</p>
                </div>
                <div className="bottom-body">
                    <div>
                        <i className="fa-solid fa-users"></i>
                        <p>{students}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-desktop"></i>
                        <p>{live}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-play"></i>
                        <p>{recorded}</p>
                    </div>
                    {date?
                    <div>
                        <i className="fa-regular fa-calendar"></i>
                        <p>{date}</p>
                    </div>:""}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramDuration
