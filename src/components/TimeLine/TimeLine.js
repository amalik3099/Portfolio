import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Img, Intro, Left, Right, ImgContainer, Wrapper, Span, H1, H2, H3 } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import Typewriter from 'typewriter-effect';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  const textRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Robotics", "Machine Learning", "Artificial Intelligence", "Software Development"],
  //   });
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <Intro>
        <Left>
          <ImgContainer>
            <Img src='/images/professional profile pic .png' alt='' />
          </ImgContainer>
        </Left>
        <Right>
          <Wrapper>
            <H2>Hi There, I'm</H2>
            <H1>Aditya Malik</H1>
            <br />
            <H3>I'm a</H3>
            <Span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Software Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Roboticist")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("ML/AI Researcher")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("F1 Enthusiast")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("MS CS Student at Columbia University")
                    .pauseFor(1500)
                    .start();
                }}
              />
            </Span>
          </Wrapper>
        </Right>
      </Intro>
      <br />
      {/* Continue with old */}
      {/* <div>
        <Img src='/images/professional profile pic .png' />
      </div> */}
      <SectionText>
        I am currently pursuing a post-graduate degree in Computer Science at Columbia University, specializing in Machine Learning. <br />
        <br />
        As an engineering student at Columbia, I am always searching for projects and ideas that can benefit the medical industry and our community.
        My interests lie in robotics, artificial intelligence, and automation and I have worked on several projects and research papers in the field.
        My goal for the future is to further develop my skills and apply them to research and pioneer new technologies.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
