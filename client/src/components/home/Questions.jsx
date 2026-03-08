import React, { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const faqData = [
  {
    question: "Is there a placement test before joining a course?",
    answer: "Yes. Every student takes a free placement test before joining a course to make sure they are placed in the correct level."
  },
  {
    question: "How does the placement test work?",
    answer: "The placement process has two simple steps: A short WhatsApp test to check the student’s basic English level, and a short Zoom meeting with a teacher to confirm the level and ensure the student can study comfortably online. The process usually takes 10–15 minutes."
  },
  {
    question: "Is the placement test free?",
    answer: "Yes. The placement test is completely free, and there are no registration fees."
  },
  {
    question: "How can I register my child or join a course?",
    answer: "You can easily register by booking the free placement test on the website or contacting us on WhatsApp, and our team will guide you through the next steps."
  },
  {
    question: "What information is required for registration?",
    answer: "We only need a few basic details: Student’s name, Age, Current English level (if known), and Parent’s WhatsApp number."
  },
  {
    question: "How many classes are there per week, and how long is each class?",
    answer: "Most courses include two or three classes per week, and each class lasts 60 minutes."
  },
  {
    question: "How many students are in each group?",
    answer: "We focus on small interactive groups. Phonics program: maximum 5 students per class. Kids English, General English, and Speaking courses: maximum 6 students per class. This allows every student to participate and receive personal attention."
  },
  {
    question: "Do you offer private one-to-one classes?",
    answer: "Yes. We offer private one-to-one lessons for students who prefer individual learning or flexible schedules."
  },
  {
    question: "What courses do you offer?",
    answer: "We offer several programs including: Phonics for children, Kids English courses, General English courses, and Speaking courses for adults. All programs focus on developing speaking confidence and real communication skills."
  },
  {
    question: "When do new batches start?",
    answer: "New batches start regularly throughout the month, depending on the level and group availability. After the placement test, we will recommend the next available group."
  },
  {
    question: "Can I choose the class schedule?",
    answer: "Yes. We offer different schedules depending on the course and level. Our team helps you choose the most suitable group and timing."
  },
  {
    question: "What curriculum do you use?",
    answer: "Our courses follow modern CEFR-aligned learning systems and use interactive materials designed for effective online learning."
  },
  {
    question: "Will students receive certificates?",
    answer: "Yes. Students receive a certificate after completing each level once they successfully pass the final evaluation."
  },
  {
    question: "What happens if a student misses a class?",
    answer: "If a student misses a class, the teacher will provide the lesson materials and homework so the student can review the lesson. The session recording stays on our cloud and is available for 7 days."
  },
  {
    question: "How can I contact the academy if I have questions?",
    answer: "You can contact us anytime through WhatsApp, and our team will be happy to assist you."
  }
];

  return (
    <section className="questions-section">

      <div className="questions">
        <div className="title">
            <p>FAQ</p>
            <h2>Frequently Asked <span>Questions</span></h2>
        </div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`question ${activeIndex === index ? "active" : ""}`}
          >
            <h4 className="ques-title" onClick={() => toggleQuestion(index)}>
              {item.question}
              <i
                className={`fa-solid ${
                  activeIndex === index ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </h4>

            {activeIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="get-intouch">
        <div className="title">
          <p>CONTACT US</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact">
            <div className="whatsapp">
                <i className="fa-regular fa-comment"></i>
                <div>
                    <p>WhatsApp</p>
                    <p>+20 111 692 5694</p>
                </div>
            </div>
            <div className="whatsapp">
                <i className="fa-regular fa-envelope"></i>
                <div>
                    <p>Email</p>
                    <p>englishtaxo2019@gmail.com</p>
                </div>
            </div>
            <div className="whatsapp">
                <i className="fa-regular fa-envelope"></i>
                <div>
                    <p>Working Hours</p>
                    <p>Sat - Thu</p>
                </div>
            </div>
        </div>

        <button>Book Free Placement Test</button>
      </div>
    </section>
  );
};

export default Questions;
