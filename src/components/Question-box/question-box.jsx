import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownArrow from "../../assets/svg/faq-svg/faq-downarrow.svg";
import "./question-box.css";

const ArrowIcon = <img src={DownArrow}></img>;

export default function QuestionBox(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    // console.log(`panel${props.index+1}`);
  };
 
  return (
    <Accordion  expanded={expanded === `panel${props.index+1}`} onChange={handleChange(`panel${props.index+1}`)}>
      <AccordionSummary
        expandIcon={ArrowIcon}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

// import React from "react";
// import "./question-box.css";
// import DownArrow from "../../assets/faq-downarrow.svg"

// const QuestionBox = (props) => {
//   return <div className="faq-questionbox" onClick="">

//     <div className="question">{props.question}</div>
//     <div className="arrow">
//         <img src={DownArrow} alt="" />
//     </div>
//   </div>;
// };

// export default QuestionBox;

// import React from "react";
// import "./faq.styles.css";

// import QuestionBox from "../Question-box/question-box";
// import FAQS from "../../assets/faqs/questions";

// const FAQ = () => {
//   const questionItems = FAQS.map((question) => <QuestionBox question={question.question}/>)
//   return <div className="faq-container">
//     <h1 className="faqs-heading">FAQ's</h1>
//     {questionItems}
//   </div>;
// };

// export default FAQ;
