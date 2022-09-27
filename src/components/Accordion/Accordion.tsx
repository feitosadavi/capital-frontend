import * as React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Question } from '../../types';

type AccordionProps = {
  questions: Question[]
}

export const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  return (
    <div>
      {questions.map(({ title, description }) => (
        <MUIAccordion key={title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </MUIAccordion>
      ))}
    </div>
  );
}