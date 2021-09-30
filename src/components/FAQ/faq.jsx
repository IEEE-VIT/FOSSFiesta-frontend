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

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownArrow from "../../assets/svg/faq-svg/faq-downarrow.svg"

export default function FAQ() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={DownArrow}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           kdjlafkddddddddkkkk 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={DownArrow}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={DownArrow}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}