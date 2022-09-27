import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Question } from '../../types';
import * as S from './Accordion.styles';

type AccordionProps = {
  questions: Question[]
}

export const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  return (
    <S.Container>
      {questions.map(({ title, description }) => (
        <S.Accordion key={title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='expand-icon' />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </S.Accordion>
      ))}
    </S.Container>
  );
}