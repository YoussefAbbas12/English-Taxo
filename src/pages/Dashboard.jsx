import NavBar from '../layouts/NavBar/NavBar'
import '../components/dashboard/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <NavBar  isHome={false}/> 

      <div className="user">
        <div className="data">
          <img src="assets/userImage.svg"/>
          <div className="name">
            <h2>Ahmed Hassan</h2>
            <p>ID: STU-2024-001</p>
          </div>
        </div>
        <div className="active-memner">
          Active Member
        </div>
      </div>
      
      <div className="user-data">
        <div>
          <i className="fa-solid fa-book-open"></i>
          <div className="text">
            <p>Course Type</p>
            <p>General English</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-medal"></i>
          <div className="text">
            <p>Current Level</p>
            <p>A2 - Elementary</p>
          </div>
        </div>
        <div>
          <i className="fa-regular fa-user"></i>
          <div className="text">
            <p>Teacher</p>
            <p>Ms. Sarah</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-desktop"></i>
          <div className="text">
            <p>Enrolled</p>
            <p>October 2024</p>
          </div>
        </div>
      </div>

      <div className="OverallCourseProgress">
        <h2>Overall Course Progress</h2>
        <div className='overall-body'>
          <div className="course-progress">
            <div>
              <p>Overall Course Progress</p>
              <span>45%</span>
            </div>
            <div className="progress"></div>
          </div>

          <div className="completed">
            <div className="completed-card">
              <img src="assets/completed1.svg" />
              <p>3 Levels Completed</p>
            </div>
            <div className="completed-card">
              <img src="assets/completed2.svg" />
              <p>28 Sessions Attended</p>
            </div>
            <div className="completed-card">
              <img src="assets/completed3.svg" />
              <p>5 Levels Remaining</p>
            </div>
          </div>
        </div>
      </div>

      <div className="LevelbyLevelProgress">
        <h2>Level by Level Progress</h2>
        <div className="levels">
          <div className="level">
            <div className="course-progress">          
              <p className="finished"><i className="fa-regular fa-circle-check"></i> A0 - Starter</p>
              <span>100%</span>
            </div>
            <div className="progress finished"></div>
          </div>
          <div className="level">
            <div className="course-progress">
              <p className="finished"><i className="fa-regular fa-circle-check"></i> A1 - Beginner</p>
              <span>100%</span>
            </div>
            <div className="progress finished"></div>
          </div>
          <div className="level">
            <div className="course-progress">
              <p className="finished"><i className="fa-regular fa-circle-check"></i> A1+ - High Beginner</p>
              <span>100%</span>
            </div>
            <div className="progress finished"></div>
          </div>
          <div className="level">
            <div className="course-progress-started">
              <p className=""><i className="fa-regular fa-clock"></i> A2 - Elementary <span>Current</span></p>
              <span>100%</span>
            </div>
            <div className="progress started"></div>
          </div>
          <div className="level">
            <div className="course-progress-not-started">
              <p className="not-started"><i className="fa-solid fa-lock"></i> A2+ - Pre-Intermediate</p>
              <span>60%</span>
            </div>
            <div className="progress not-started"></div>
          </div>
          <div className="level">
            <div className="course-progress-not-started">
              <p className="not-started"><i className="fa-solid fa-lock"></i> B1 - Intermediate</p>
              <span>0%</span>
            </div>
            <div className="progress not-started"></div>
          </div>
          <div className="level">
            <div className="course-progress-not-started">
              <p className="not-started"><i className="fa-solid fa-lock"></i> B1+ - Upper Intermediate</p>
              <span>0%</span>
            </div>
            <div className="progress not-started"></div>
          </div>
          <div className="level">
            <div className="course-progress-not-started">
              <p className="not-started"><i className="fa-solid fa-lock"></i> B2 - Advanced</p>
              <span>0%</span>
            </div>
            <div className="progress not-started"></div>
          </div>
        </div>
      </div>

      <div className="Attendance-Commitment">
        <h2>Attendance & Commitment</h2>
        <div>
          <div className="AttendanceCard card2">
            <div className="rate">
            <div className="rate">
              <svg className="rate-ring" width="160" height="160">
                <circle
                  className="rate-ring__bg"
                  cx="80"
                  cy="80"
                  r="70"
                />
                <circle
                  className="rate-ring__circle"
                  cx="80"
                  cy="80"
                  r="70"
                />
              </svg>
              <div className="rate-text">90%</div>
            </div>

              <p>Attendance Rate</p>
            </div>
            <div className="cards">
              <div className="card">
                <p><i className="fa-regular fa-calendar"></i> 30</p>
                <p>Total</p>
              </div>
              <div className="card">
                <p><i className="fa-regular fa-circle-check"></i> 27</p>
                <p>Attended</p>
              </div>
              <div className="card">
                <p><i className="fa-regular fa-circle-xmark"></i> 3</p>
                <p>Missed</p>
              </div>
            </div>
          </div>

          <div className="AttendanceCard left">
            <div className="rate">
            <div className="rate">
              <svg className="rate-ring" width="160" height="160">
                <circle
                  className="rate-ring__bg"
                  cx="80"
                  cy="80"
                  r="70"
                />
                <circle
                  className="rate-ring__circle"
                  cx="80"
                  cy="80"
                  r="70"
                />
              </svg>
              <div className="rate-text">86%</div>
            </div>
              <p>Completion Rate</p>
            </div>
            <div className="cards">
              <div className="card">
                <p><i className="fa-solid fa-book-open"></i> 24 / 28</p>
                <p>Assignments Submitted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
