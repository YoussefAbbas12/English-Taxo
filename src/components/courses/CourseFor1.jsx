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
            <CourseCard title="Early Readers" p="Children taking their first steps in learning to read and decode words" image="courseKids1.svg" />
            <CourseCard title="Pronunciation Support" p="Kids who need help with reading difficulties or pronunciation challenges" image="courseKids2.svg" />
            <CourseCard title="Strong Foundations" p="Young learners building solid English foundations for academic success" image="courseKids3.svg" />
            <CourseCard title="International Prep" p="Students preparing for international or English-medium schools" image="courseKids4.svg" />
        </div>
    </section>
  )
}

export default CourseFor
