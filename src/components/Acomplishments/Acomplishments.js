import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '18', text: 'Open Source Projects'},
  { number: 3, text: 'Research Publications', },
  { number: 4, text: 'Awards and Certifications', },
  { number: '20+', text: 'Academic Courses', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
