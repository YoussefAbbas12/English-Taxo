import React from 'react'
import CourseCard from './CourseCard'

const CourseFor = () => {
  return (
    <section className='course-for'>
        <div className="section-title">
            <h2>Who Is This <span>Course For?</span></h2>
            <p>Our phonics program is designed to help every child succeed in their reading journey</p>
        </div>
        <div className="course-cards">
            <CourseCard title="KG to Grade 5 Students" p="Children in kindergarten through elementary school developing their English abilities" image="course11.png" />
            <CourseCard title="International School Learners" p="Students in international schools who need additional English support and practice" image="course12.png" />
            <CourseCard title="Foundation Builders" p="Kids who need stronger foundations in grammar, vocabulary, and communication skills" image="course13.png" />
            <CourseCard title="Phonics Graduates" p="Learners transitioning from phonics programs to comprehensive English education" image="course14.png" />
        </div>
    </section>
  )
}

export default CourseFor
