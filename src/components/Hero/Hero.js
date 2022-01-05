import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a MS in Computer Science student at Columbia University, specializing in Machine Learning and Robotics.
      </SectionText>
      <Button onclick={() => window.location.href="https://www.google.com"}>Learn More</Button>
    </LeftSection>
  </section>
);

export default Hero;