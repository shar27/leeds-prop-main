import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Contact their team late on a Friday night to arrange somebody to come and help me sort out a broken door."
            author="Ollie Brough"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="What a great job. Two charming and strong young men arrived punctually, immediately set to work clearing our garden and garage. There were some very heavy garden pots full of earth that we could not manage, no problem, emptied and loaded in no time. Thank you"
            author="Christine"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Cannot fault them. Super quick with their responses. I had a property which required multiple things fixing, painting, cleaning etc and they started this work really quickly after instruction. I would recommend them - their team are very friendly and always happy to help. Thank you so so much!"
            author="HJS"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Absolutely amazing.
I had to co-ordinate a clearance from Bournemouth, and Shar was a pleasure to deal with.
Professional, polite and reasonably priced, what's not to like!
Tom, who carried out the clearance, was equally as professional and very friendly (I had to take the word of a friend on-site as I couldn't be there).
Can't recommend these guys enough."
            author="J Cameron"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Your guys have done a fantastic job , and I very much appreciate you being able to fit us in to your busy schedule at short notice and making it easy for us too
Many thanks
Kind Regards
Gerald"
            author="Gerald Blake"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter"></LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
