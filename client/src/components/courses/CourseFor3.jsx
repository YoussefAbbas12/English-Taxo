import React from 'react'
import CourseCard from './CourseCard'

const CourseFor = () => {
  return (
    <section className='course-for'>
        <div className="section-title">
            <h2>Who Is This <span>Course For?</span></h2>
            <p>Our phonics program is designed to help every child succeed in their reading journey</p>
        </div>
        <div className="course-cards course-cards3">
            <CourseCard title="University Students" p="Prepare for academic presentations and discussions" image="course11.png" third={true} />
            <CourseCard title="Job Seekers" p="Ace English interviews and professional conversations" image="course12.png" third={true} />
            <CourseCard title="Working Professionals" p="Communicate confidently in meetings and presentations" image="course13.png" third={true} />
            <CourseCard title="Adults Moving Abroad" p="Build fluency for life in English-speaking environments" image="course14.png" third={true} />
            <CourseCard title="Parents" p="Improve English to support children's education" image="course14.png" third={true} />
            <CourseCard title="Passive Learners" p="Studied English but lack real speaking practice" image="course14.png" third={true} />
        </div>
    </section>
  )
}

export default CourseFor
