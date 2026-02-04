import React, { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What age groups do you teach?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tenetur."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we provide online sessions for all levels."
    },
    {
      question: "How can I register?",
      answer: "You can register through our website or contact us directly."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, certificates are provided after course completion."
    },
    {
      question: "Is there a placement test?",
      answer: "Yes, we offer a free placement test."
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
                    <p>+20 123 456 7890</p>
                </div>
            </div>
            <div className="whatsapp">
                <i className="fa-regular fa-envelope"></i>
                <div>
                    <p>Email</p>
                    <p>hello@englishtaxo.com</p>
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
