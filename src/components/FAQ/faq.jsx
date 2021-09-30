// import React from "react";
// import "./faq.styles.css";

// import QuestionBox from "../Question-box/question-box";
import FAQSList from "../../assets/faqs/questions";

// const FAQ = () => {
//   const questionItems = FAQS.map((question) => <QuestionBox question={question.question}/>)
//   return <div className="faq-container">
//     <h1 className="faqs-heading">FAQ's</h1>
//     {questionItems}
//   </div>;
// };

// export default FAQ;


import "./faq.styles.css"
import QuestionBox from "../Question-box/question-box";

export default function FAQ() {
    const FAQItems = FAQSList.map((set, index) => {
        return(  <QuestionBox question={set.question} answer={set.answer} index={index}></QuestionBox>)
    })
  return (
    <div className="faq-container">
    <h1 className="faq-heading">FAQ's</h1>
    <hr className="faq-hr"/>
      {FAQItems}
    </div>
  );
}