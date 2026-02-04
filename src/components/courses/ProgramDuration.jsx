import React from 'react'

const ProgramDuration = () => {
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
                        <h3>9 Total Levels</h3>
                        <p>Level Zero + Levels 1-8</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program2.png"/>
                    <div>
                        <h3>9 Months</h3>
                        <p>Complete Program</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program3.png"/>
                    <div>
                        <h3>1 Hour</h3>
                        <p>Per Session</p>
                    </div>
                </div>
                <div className="top-card">
                    <img src="assets/program4.png"/>
                    <div>
                        <h3>2-3 Session</h3>
                        <p>Per Week</p>
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
                        <i class="fa-solid fa-users"></i>
                        <p>Max 5 Students Per Group</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-desktop"></i>
                        <p>Live Zoom Sessions</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-play"></i>
                        <p>Recorded for 1 Week</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramDuration
