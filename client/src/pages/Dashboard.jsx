import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from '../layouts/NavBar/NavBar'
import '../components/dashboard/Dashboard.css'

const LEVELS = [
  { key: "A0", label: "A0 - Starter" },
  { key: "A1", label: "A1 - Beginner" },
  { key: "A1+", label: "A1+ - High Beginner" },
  { key: "A2", label: "A2 - Elementary" },
  { key: "A2+", label: "A2+ - Pre-Intermediate" },
  { key: "B1", label: "B1 - Intermediate" },
  { key: "B1+", label: "B1+ - Upper Intermediate" },
  { key: "B2", label: "B2 - Advanced" },
  { key: "C1", label: "C1 - Proficient" },
];

const Dashboard = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [student, setStudent] = useState(state?.student || null);
  const [loading, setLoading] = useState(!state?.student);

  useEffect(() => {
    if (!student) {
      fetch(`${import.meta.env.VITE_API_URL}/api/students/${id}/public`)
        .then((r) => r.json())
        .then((data) => setStudent(data))
        .catch(() => navigate("/student"))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!student) return null;

  const attendanceRate = Math.round((student.attended_days / student.expected_days) * 100) || 0;
  const assignmentRate = Math.round((student.assignments_submitted / student.assignments_total) * 100) || 0;
  const missedDays = student.expected_days - student.attended_days;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const attendanceOffset = circumference - (attendanceRate / 100) * circumference;
  const assignmentOffset = circumference - (assignmentRate / 100) * circumference;

  // حساب الـ levels
  const currentLevelIndex = LEVELS.findIndex((l) => l.key === student.current_level);
  const completedLevels = currentLevelIndex; // كل اللي قبله 100%

  const getLevelStatus = (index) => {
    if (index < currentLevelIndex) return "finished";
    if (index === currentLevelIndex) return "current";
    return "not-started";
  };

  const getLevelProgress = (index) => {
    if (index < currentLevelIndex) return 100;
    if (index === currentLevelIndex) return student.level_progress;
    return 0;
  };

  console.log(student)
  return (
    <div className='dashboard'>
      <NavBar isHome={false}/>

      <div className="user">
        <div className="data">
          <img src={student.profile_image}/>
          <div className="name">
            <h2>{student.name}</h2>
            <p>{student.id}</p>
          </div>
        </div>
        <div className="active-memner">Active Member</div>
      </div>

      <div className="user-data">
        <div>
          <i className="fa-solid fa-book-open"></i>
          <div className="text">
            <p>Course Type</p>
            <p>{student.course_type}</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-medal"></i>
          <div className="text">
            <p>Current Level</p>
            <p>{student.current_level}</p>
          </div>
        </div>
        <div>
          <i className="fa-regular fa-user"></i>
          <div className="text">
            <p>Teacher</p>
            <p>{student.teacher}</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-desktop"></i>
          <div className="text">
            <p>Enrolled</p>
            <p>{new Date(student.enrolled_date).toLocaleDateString("en-GB")}</p>
          </div>
        </div>
      </div>

      <div className="OverallCourseProgress">
        <h2>Overall Course Progress</h2>
        <div className='overall-body'>
          <div className="course-progress">
            <div>
              <p>Overall Course Progress</p>
              <span>{student.level_progress}%</span>
            </div>
            <div className="progress" style={{ '--progress': `${student.level_progress}%` }}></div>
          </div>

          <div className="completed">
            <div className="completed-card">
              <img src="../assets/completed1.svg" />
              <p>{completedLevels} Levels Completed</p>
            </div>
            <div className="completed-card">
              <img src="../assets/completed2.svg" />
              <p>{student.attended_days} Sessions Attended</p>
            </div>
            <div className="completed-card">
              <img src="../assets/completed3.svg" />
              <p>{LEVELS.length - currentLevelIndex - 1} Levels Remaining</p>
            </div>
          </div>
        </div>
      </div>

      <div className="LevelbyLevelProgress">
        <h2>Level by Level Progress</h2>
        <div className="levels">
          {LEVELS.map((level, index) => {
            const status = getLevelStatus(index);
            const progress = getLevelProgress(index);

            if (status === "finished") return (
              <div className="level" key={level.key}>
                <div className="course-progress">
                  <p className="finished"><i className="fa-regular fa-circle-check"></i> {level.label}</p>
                  <span>100%</span>
                </div>
                <div className="progress finished"></div>
              </div>
            );

            if (status === "current") return (
              <div className="level" key={level.key}>
                <div className="course-progress-started">
                  <p><i className="fa-regular fa-clock"></i> {level.label} <span>Current</span></p>
                  <span>{progress}%</span>
                </div>
                <div className="progress started" style={{ '--progress': `${progress}%` }}></div>
              </div>
            );

            return (
              <div className="level" key={level.key}>
                <div className="course-progress-not-started">
                  <p className="not-started"><i className="fa-solid fa-lock"></i> {level.label}</p>
                  <span>0%</span>
                </div>
                <div className="progress not-started"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Attendance-Commitment">
        <h2>Attendance & Commitment</h2>
        <div>
          <div className="AttendanceCard card2">
            <div className="rate">
              <div className="rate">
                <svg className="rate-ring" width="160" height="160">
                  <circle className="rate-ring__bg" cx="80" cy="80" r="70"/>
                  <circle
                    className="rate-ring__circle"
                    cx="80" cy="80" r="70"
                    style={{ strokeDasharray: circumference, strokeDashoffset: attendanceOffset }}
                  />
                </svg>
                <div className="rate-text">{attendanceRate}%</div>
              </div>
              <p>Attendance Rate</p>
            </div>
            <div className="cards">
              <div className="card">
                <p><i className="fa-regular fa-calendar"></i> {student.expected_days}</p>
                <p>Total</p>
              </div>
              <div className="card">
                <p><i className="fa-regular fa-circle-check"></i> {student.attended_days}</p>
                <p>Attended</p>
              </div>
              <div className="card">
                <p><i className="fa-regular fa-circle-xmark"></i> {missedDays}</p>
                <p>Missed</p>
              </div>
            </div>
          </div>

          <div className="AttendanceCard left">
            <div className="rate">
              <div className="rate">
                <svg className="rate-ring" width="160" height="160">
                  <circle className="rate-ring__bg" cx="80" cy="80" r="70"/>
                  <circle
                    className="rate-ring__circle"
                    cx="80" cy="80" r="70"
                    style={{ strokeDasharray: circumference, strokeDashoffset: assignmentOffset }}
                  />
                </svg>
                <div className="rate-text">{assignmentRate}%</div>
              </div>
              <p>Completion Rate</p>
            </div>
            <div className="cards">
              <div className="card">
                <p><i className="fa-solid fa-book-open"></i> {student.assignments_submitted} / {student.assignments_total}</p>
                <p>Assignments Submitted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;