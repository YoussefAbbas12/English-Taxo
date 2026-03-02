import React from 'react'
import JourneyCard from './JourneyCard'

const Journey = () => {
  return (
    <section className='journey'>
        <div className="section-title">
            <h2>Learning <span>Journey</span></h2>
            <p>Explore what your child will learn at each stage of their reading journey</p>
        </div>
        <div>
                    <div className="left">
            <JourneyCard image="level0.png" level="0" title="Foundation" li1="Letter names, shapes, sounds" li2="Letter writing" li3="Recognizing letters in words" li4="Early reading readiness" />
            <JourneyCard image="level2.png" level="2" title="Developing" li1="Long vowel sounds" li2="Reading short stories" li3="50 new verbs" li4="Functional speaking questions" />
            <JourneyCard image="level4.png" level="4" title="Fluent" li1="More complex sounds" li2="Improved reading fluency" li3="50 verbs" li4="+ 2 speaking sessions" />
            <JourneyCard image="level6.png" level="6" title="Skilled" li1="Advanced blends and clusters" li2="Reading short stories" li3="50 verbs" li4="+ 2 speaking sessions" />
            <JourneyCard image="level8.png" level="8" title="Master" li1="Remaining complex and similar-sound patterns" li2="Fluent reading of short stories" li3="+ 2 speaking sessions" li4="Preparation for Kids English Program" />
        </div>
        <div className="mid">
            <p>0</p>
            <p className='verse'>1</p>
            <p>2</p>
            <p className='verse'>3</p>
            <p>4</p>
            <p className='verse'>5</p>
            <p>6</p>
            <p className='verse'>7</p>
            <p>8</p>
        </div>
        <div className="right">
            <JourneyCard image="level1.png" level="1" title="Beginning" li1="All basic letter sounds" li2="Blending to read short words" li3="Reading short sentences" li4="50 verbs + basic speaking questions" />
            <JourneyCard image="level3.png" level="3" title="Progressing" li1="Consonant blends" li2="Complex sound patterns" li3="Reading stories" li4="50 verbs" li5="+ 3 speaking sessions for vocabulary and confidence" />
            <JourneyCard image="level5.png" level="5" title="Advanced" li1="Advanced sound combinations" li2="Reading accuracy" li3="50 verbs" li4="+ 2 speaking sessions" />
            <JourneyCard image="level7.png" level="7" title="Expert" li1="More complex patterns" li2="Reading with understanding" li3="50 verbs" li4="+ 1 speaking session" />
        </div>
        </div>
    </section>
  )
}

export default Journey
