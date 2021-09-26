import React from "react";
import "./faq.styles.css";

import QuestionBox from "../Question-box/question-box";
import FAQS from "../../assets/faqs/questions";

const FAQ = () => {
  const questionItems = FAQS.map((question) => <QuestionBox question={question.question}/>)
  return <div className="faq-container">
    <h1 className="faqs-heading">FAQ's</h1>
    {questionItems}
  </div>;
};

export default FAQ;
