import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Aditya <br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an MS student in Computer Science at Columbia University, specializing in Machine Learning and Robotics.
      </SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </section>
);

export default Hero;