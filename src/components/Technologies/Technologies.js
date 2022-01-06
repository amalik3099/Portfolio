import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython } from 'react-icons/di';
import { FaRobot } from 'react-icons/fa';
import {GiBrain} from 'react-icons/gi';
import {SiScikitlearn} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the software world. 
      From Machine learning and robotics, to full-stack development.
    </SectionText>
    <List>
    <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python <br />
            Java <br />
            C/C++ <br />
            MATLAB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiBrain size="3rem" />
        <ListContainer>
          <ListTitle>ML</ListTitle>
          <ListParagraph>
            TensorFlow <br />
            scikit-learn <br />
            PyTorch <br />
            Keras <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaRobot size="3rem" />
        <ListContainer>
          <ListTitle>Robotics</ListTitle>
          <ListParagraph>
            OpenCV <br />
            ROS <br />
            Rviz <br />
            Gazebo <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML <br />
            CSS <br />
            Javascript <br />
            React.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            MongoDB <br />
            AWS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Git/Github <br />
            Unix/Linux <br />
            Solidworks (CSWA Certified) <br />
            AutoCAD <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
  </Section>
);

export default Technologies;
